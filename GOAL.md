# Portfolio Site — Build Goal

## Objective
Build a single-page professional portfolio site that a hiring manager could
land on and immediately understand: who this is, what they do, proof of work
(5 projects), and how to get in touch.

## Required tech stack (hard requirement — not optional)
- **Next.js** (App Router, TypeScript) — `app/layout.tsx`, `app/page.tsx`
- **Tailwind CSS** for all styling — no plain `<style>` blocks, no CSS-in-JS,
  no other CSS framework
- **GitHub** — project lives in a git repo, pushed to GitHub
- **Vercel** — deployed via Vercel (connected to the GitHub repo)

Project root IS the Next.js app (`package.json`, `app/`, `tailwind.config.ts`,
`next.config.js`, `public/`). Do not build a static `site/index.html` —
that's the old scaffold; this one supersedes it.

## Real values now in use
- Calendar scheduling link: `https://calendar.app.google/p8LkewkGg9MKoGr58` (real)
- CV/resume file: `public/cv.pdf` — real CV, copied from `F:\jblantv\Jobin_Blancaflor_2026.pdf`
- LinkedIn: `https://www.linkedin.com/in/jobin-blancaflor-760191161/` (real)
- GitHub: `https://github.com/jobinblancaflor` (real)

## Real projects (originally 5, now 9)
Selected from 6 supplied projects, keeping the 5 highest portfolio-strength
ones (dropped HeyJuno — 3-star, smallest scope — to match the 5-project
hard requirement):
- **Quietlist** — Property Marketplace — Developer — Bubble, Postmark, custom image tooling
- **WellShareWay** — Clinic Marketplace/Booking — Developer + Support — Bubble, Acuity Scheduling, Stripe
- **Parian Labs** — Fitness/AI/Computer Vision — Main Developer — Bubble, Custom Plugins, TensorFlow, Camera, Postmark, Stripe
- **Pattaya Rent a Car** — Car Rental Marketplace — Developer — Bubble, Custom Date Picker, Google Sheets, SendGrid
- **FieldOps / Conserva** — CRM — Developer — Bubble, CanvasTemplate, GHL, Make.com, Xano, Manus.ai

Four more added later (9 total): Secure Signal (full-stack: Next.js, Supabase, Firebase, Kotlin, Leaflet), Gig Coins (gig-coin.vercel.app), Electrohm Queue (local queue system, SQLite), Electrohm TV (electrohm-haus-tv.vercel.app). `gate.py` PROJECT_NAMES lists all 9.

Case-study copy (problem/approach/outcome) is written from the supplied
role/category/tech-stack facts only — no invented metrics or numbers, since
these are real named client projects. If you want stronger outcome claims
(real numbers, results), supply them and the copy can be sharpened.

## Still placeholder
- Project images: generated gradient placeholder graphics, not real
  screenshots — swap in actual product screenshots when available.

## Hard requirements (mechanical — checked by `.claude/gate.py`)
Gate is un-gameable on facts: either it's true of the source/build or it
isn't. All of the following MUST be true for the gate to pass:

0. `package.json` has `next` and `tailwindcss` as dependencies; a
   `tailwind.config.ts` (or `.js`) exists; `npm run build` (`next build`)
   exits 0 — no build errors.
1. Primary CTA text `Let's Talk` present in `app/` source.
2. Calendar link present (`calendar.google.com` or the placeholder URL above)
   as an `<a href="...">`.
3. Positioning/tagline copy present near the top (a short one-line value
   statement in a heading, not just a name).
4. All 9 project names present as text.
5. CV/resume link present, pointing at a `.pdf`.
6. LinkedIn link present as `<a href="...linkedin.com...">`.
7. GitHub link present as `<a href="...github.com...">`.
8. Responsive: Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, or `xl:`)
   present somewhere in `app/` (viewport meta itself is auto-injected by
   Next.js App Router, so not separately checked).
9. A contact section present (`id="contact"` or a heading containing
   "Contact").
10. Each of the 9 projects has an associated image — `<img>` or Next.js
    `<Image>` — not text-only project cards.
11. No plain `<style>` blocks and no CSS-in-JS library in `package.json`
    (styling must be Tailwind utility classes).

## Soft requirements (judged — checked by `portfolio-judge` subagent against
`.claude/judge_rubric.md`, NOT by gate.py)
- Visual hierarchy / whitespace / typography feel intentional, not default.
- Copy tone reads professional and confident, not filler/lorem-ipsum-y.
- Project case studies each explain problem → approach → outcome, not just
  a name and a screenshot.
- Overall: "would you send this link to a hiring manager without wincing."

See `.claude/judge_rubric.md` for the full 9-point scored checklist.

## Process
1. `portfolio-builder` subagent (Sonnet) scaffolds/edits the Next.js +
   Tailwind app (`create-next-app` equivalent structure, or hand-rolled —
   either is fine as long as `npm run build` passes).
2. After every change, run `.claude/gate.py`. Non-zero exit = not done,
   keep iterating — do not stop, do not declare victory.
3. Once gate is green (all 12 hard checks pass), hand off to
   `portfolio-judge` subagent (Haiku, read-only) to score against the rubric.
4. If judge returns anything other than overall PASS, go back to step 1 with
   the judge's specific feedback.
5. Stop when: judge returns overall PASS, OR the turn ceiling below is hit —
   whichever comes first.
6. **Deploy is a separate, manual step — not part of the automated loop.**
   Pushing to GitHub and deploying to Vercel are explicit-permission actions
   (visible to others / shared state). Once the loop reports done, ask the
   user to confirm before: `git init` + first commit + push to a GitHub
   repo, and connecting/deploying that repo on Vercel. Do not auto-push or
   auto-deploy.

## Turn ceiling
**Max 15 maker turns.** A "maker turn" = one dispatch of the
`portfolio-builder` subagent. This is independent of gate/judge status — if
turn 15 finishes and it's still not fully green, stop anyway and report
current state (what passed, what didn't, what's left) rather than continuing
indefinitely.

## Explicitly out of scope
- Backend/CMS, forms wired to a real mail server, analytics.
- Anything beyond what `next build && next start` (or Vercel) serves.
