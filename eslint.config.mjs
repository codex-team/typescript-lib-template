import CodeX from 'eslint-config-codex';
import { plugin as TsPlugin, parser as TsParser } from 'typescript-eslint';

export default [
  ...CodeX,
  {
    name: 'codex-lib-ts',
    ignores: [
      // 'eslint.config.mjs',
    ],
    plugins: {
      '@typescript-eslint': TsPlugin,
    },

    /**
     * This are the options for typescript files
     */
    languageOptions: {
      parser: TsParser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: './',
        sourceType: 'module',
      },
    },

    rules: {
    },
  },
];
