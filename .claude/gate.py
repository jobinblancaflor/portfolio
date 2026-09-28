#!/usr/bin/env python3
"""Mechanical gate for the portfolio build (Next.js + Tailwind CSS stack).

Zero-token, no LLM calls. Checks the tech-stack requirement (Next.js,
Tailwind, buildable) plus every hard content requirement in GOAL.md by
inspecting package.json / config files / app source, and by actually
running `npm run build`.

Exit 0 = all pass. Exit 2 = at least one hard check failed (prints which) —
2 matches the Stop-hook "block" convention.

Run manually:  python3 .claude/gate.py
Also wired as a Stop hook via .claude/settings.json where supported.
"""
import json
import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP_DIR = ROOT / "app"
PKG = ROOT / "package.json"

PROJECT_NAMES = [
    "Quietlist",
    "WellShareWay",
    "Parian Labs",
    "Pattaya Rent a Car",
    "FieldOps / Conserva",
    "Secure Signal",
    "Gig Coins",
    "Electrohm Queue",
    "Electrohm TV",
    "HeyJuno",
]

CSS_IN_JS_LIBS = ["styled-components", "@emotion/react", "@emotion/styled"]


def read_app_source():
    """Concatenate every source file under app/ (and components/ if it
    exists) so content checks work regardless of how components are split
    up."""
    if not APP_DIR.exists():
        return None
    parts = []
    search_dirs = [APP_DIR]
    components_dir = ROOT / "components"
    if components_dir.exists():
        search_dirs.append(components_dir)
    for d in search_dirs:
        for path in d.rglob("*"):
            if path.suffix in (".tsx", ".ts", ".jsx", ".js", ".css") and path.is_file():
                parts.append(path.read_text(encoding="utf-8", errors="ignore"))
    return "\n".join(parts)


def check_stack(failures):
    if not PKG.exists():
        failures.append("Missing package.json - not a Next.js project yet.")
        return False
    pkg = json.loads(PKG.read_text(encoding="utf-8", errors="ignore"))
    deps = {**pkg.get("dependencies", {}), **pkg.get("devDependencies", {})}
    if "next" not in deps:
        failures.append("package.json missing 'next' dependency.")
    if "tailwindcss" not in deps:
        failures.append("package.json missing 'tailwindcss' dependency.")
    for lib in CSS_IN_JS_LIBS:
        if lib in deps:
            failures.append(f"Found CSS-in-JS dependency '{lib}' — styling must be Tailwind only.")

    has_tw_config = any(
        (ROOT / f"tailwind.config.{ext}").exists() for ext in ("ts", "js", "cjs", "mjs")
    )
    if not has_tw_config:
        failures.append("Missing tailwind.config.(ts|js) at project root.")

    if not (APP_DIR / "layout.tsx").exists() and not (APP_DIR / "layout.js").exists():
        failures.append("Missing app/layout.tsx (App Router entry layout).")
    if not (APP_DIR / "page.tsx").exists() and not (APP_DIR / "page.js").exists():
        failures.append("Missing app/page.tsx (App Router home page).")

    return True


def check_build(failures):
    if not (ROOT / "node_modules").exists():
        failures.append("node_modules missing — run `npm install` before the gate can verify the build.")
        return
    # Separate distDir: the Stop hook fires this while `next dev` may be running,
    # and building into .next would corrupt the dev server's cache.
    env = {**os.environ, "NEXT_DIST_DIR": ".next-gate"}
    result = subprocess.run(
        ["npm", "run", "build"],
        cwd=ROOT,
        env=env,
        capture_output=True,
        text=True,
        timeout=600,
        shell=(sys.platform == "win32"),
    )
    if result.returncode != 0:
        tail = "\n".join((result.stdout + result.stderr).splitlines()[-25:])
        failures.append(f"`npm run build` failed (exit {result.returncode}):\n{tail}")


def check_style_blocks(text, failures):
    if re.search(r"<style\b", text, re.IGNORECASE):
        failures.append("Found a plain <style> block — styling must be Tailwind utility classes only.")


def check_cta(text, failures):
    if not re.search(r"Let'?s Talk", text, re.IGNORECASE):
        failures.append("Missing CTA text \"Let's Talk\"")


def check_calendar_link(text, failures):
    if not re.search(
        r'<a\s[^>]*href=["\'][^"\']*calendar\.(google\.com|app\.google)[^"\']*["\']',
        text,
        re.IGNORECASE,
    ):
        failures.append("Missing calendar link (calendar.google.com or calendar.app.google href)")


def check_positioning_copy(text, failures):
    head = text[: max(len(text) // 2, 4000)]
    for m in re.finditer(r"<h[12][^>]*>(.*?)</h[12]>", head, re.IGNORECASE | re.DOTALL):
        content = re.sub(r"<[^>]+>", "", m.group(1)).strip()
        if len(content) > 20:
            return
    failures.append("Missing positioning/tagline copy (h1/h2 >20 chars near top)")


def check_project_names(text, failures):
    missing = [p for p in PROJECT_NAMES if p not in text]
    if missing:
        failures.append(f"Missing project name(s): {', '.join(missing)}")


def check_cv_link(text, failures):
    if not re.search(r'<a\s[^>]*href=["\'][^"\']*\.pdf["\']', text, re.IGNORECASE):
        failures.append("Missing CV/resume link to a .pdf")


def check_linkedin(text, failures):
    if not re.search(
        r'<a\s[^>]*href=["\'][^"\']*linkedin\.com[^"\']*["\']', text, re.IGNORECASE
    ):
        failures.append("Missing LinkedIn link")


def check_github(text, failures):
    if not re.search(
        r'<a\s[^>]*href=["\'][^"\']*github\.com[^"\']*["\']', text, re.IGNORECASE
    ):
        failures.append("Missing GitHub link")


def check_responsive(text, failures):
    if not re.search(r'\b(sm|md|lg|xl):', text):
        failures.append("No Tailwind responsive prefixes (sm:/md:/lg:/xl:) found — not responsive.")


def check_contact_section(text, failures):
    if not re.search(
        r'(id|className)=["\'][^"\']*contact[^"\']*["\']|<h[1-6][^>]*>[^<]*contact',
        text,
        re.IGNORECASE,
    ):
        failures.append("Missing contact section (id/className/heading containing 'contact')")


def check_project_images(text, failures):
    missing = []
    for name in PROJECT_NAMES:
        idx = text.find(name)
        if idx == -1:
            missing.append(name)
            continue
        window = text[max(0, idx - 1500) : idx + 1500]
        has_img = bool(re.search(r"<img\b|<Image\b", window))
        if not has_img:
            missing.append(name)
    if missing:
        failures.append(f"Project(s) missing nearby <img>/<Image>: {', '.join(missing)}")


def main():
    failures = []

    stack_ok = check_stack(failures)
    if not stack_ok:
        print(f"GATE: FAIL ({len(failures)} issue(s))")
        for f in failures:
            print(f" - {f}")
        sys.exit(2)

    text = read_app_source() or ""

    check_style_blocks(text, failures)
    check_cta(text, failures)
    check_calendar_link(text, failures)
    check_positioning_copy(text, failures)
    check_project_names(text, failures)
    check_cv_link(text, failures)
    check_linkedin(text, failures)
    check_github(text, failures)
    check_responsive(text, failures)
    check_contact_section(text, failures)
    check_project_images(text, failures)
    check_build(failures)

    if failures:
        print(f"GATE: FAIL ({len(failures)} issue(s))")
        for f in failures:
            print(f" - {f}")
        sys.exit(2)

    print("GATE: PASS - Next.js + Tailwind build succeeds, all 12 hard checks satisfied.")
    sys.exit(0)


if __name__ == "__main__":
    main()
