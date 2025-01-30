import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintPluginPrettier,
  ...tseslint.configs.recommended,
  {
    rules: {
      ...eslintConfigPrettier.rules,
      ...eslintPluginPrettier.rules,
      'no-unused-expressions': 1,
    },
  },
  { ignores: ['dist', 'node_modules', 'coverage'] },
];
