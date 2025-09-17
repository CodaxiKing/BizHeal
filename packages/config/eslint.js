// Base ESLint configuration for BizHeal monorepo
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/prefer-const": "error",
    "prefer-const": "off", // Use TypeScript rule instead
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "build/",
    "*.generated.*",
    "*.config.js",
  ],
};