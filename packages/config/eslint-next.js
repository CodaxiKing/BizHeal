// Next.js specific ESLint configuration for BizHeal monorepo
module.exports = {
  extends: [
    "./eslint.js",
    "next/core-web-vitals",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};