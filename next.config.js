/** @type {import('next').NextConfig} */
const nextConfig = {
  // .claude/gate.py builds into a separate dir so it never clobbers a running `next dev`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

module.exports = nextConfig;
