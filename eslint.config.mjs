// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default defineConfig([
  ...tseslint.config(
    js.configs.recommended,
    eslintPluginPrettierRecommended,
    {
      files: ["**/*.{ts,tsx,js}"],
      ignores: ["dist/**", "node_modules/**"],
      plugins: { unicorn: eslintPluginUnicorn },
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          project: "./tsconfig.json",
        },
        ecmaVersion: "latest",
        sourceType: "module",
        globals: globals.node,
      },
      rules: {
        // base ESLint
        eqeqeq: "error",
        "prefer-const": "error",
        "no-var": "error",
        "prefer-template": "error",
        "prefer-arrow-callback": "error",
        "no-alert": "warn",
        "no-unused-vars": "warn",
        "consistent-return": "off",

        // unicorn rules
        "unicorn/consistent-destructuring": "error",
        "unicorn/error-message": "error",
        "unicorn/no-abusive-eslint-disable": "error",
        "unicorn/prefer-ternary": "error",
      },
    }
  ),
]);
