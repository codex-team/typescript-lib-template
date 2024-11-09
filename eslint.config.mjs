import CodeX from 'eslint-config-codex';
import { plugin as TsPlugin, parser as TsParser } from 'typescript-eslint';
import path from 'path';
import { fileURLToPath } from 'url';
import EslintTestsConfig from './eslint.config.test.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  ...CodeX,
  ...EslintTestsConfig,
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
        project: path.resolve(__dirname, 'tsconfig.json'),
        tsconfigRootDir: './',
        sourceType: 'module',
      },
    },

    rules: {
    },
  },
];
