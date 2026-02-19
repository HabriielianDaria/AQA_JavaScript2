import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser, ...globals.jest },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "script", // для CommonJS
      },
    },
  },
]);
