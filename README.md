# @codexteam/typescript-lib-template
A quick start template for a new TypeScript library

[![NPM version](https://img.shields.io/npm/v/@codexteam/typescript-lib-template?style=flat-square)](https://www.npmjs.com/package/@codexteam/typescript-lib-template)
[![License](https://img.shields.io/npm/l/@codexteam/typescript-lib-template?style=flat-square)](https://www.npmjs.com/package/@codexteam/typescript-lib-template)

## Features 

- 💄 Yarn 4
- 🛍️ Yarn Workspaces
- 💎 ESLint 9 with [eslint-config-codex](http://github.com/codex-team/eslint-config/)
- 🥃 Typescript 5
- 🥊 npx only-allow yarn
- 🌶️ Tests with [Vitest](https://vitest.dev)
- 🍀 GitHub Actions for test/lint/build/publish purposes

## How to use
1. Click [here](https://github.com/codex-team/typescript-lib-template/generate) and fill setting for new repository
2. Update root package `package.json`, change main package name
3. Update "core" package `package.json`:
    1. Change `name`
    2. Adjust `main`, `types`, `exports`
5. Change name of `packages/core` to your main package name
5. Go to `packages/utils` and adjust its name or remove the package if you don't need it
3. Change NPM package scope from [workflow file](./.github/workflows/main.yml) or remove it
4. Fill `NPM_TOKEN` and `CODEX_BOT_WEBHOOK` secrets in your repository or organization settings
5. Start writing your new library!

# About CodeX

<img align="right" width="120" height="120" src="https://codex.so/public/app/img/codex-logo.svg" hspace="50">

CodeX is a team of digital specialists around the world interested in building high-quality open source products on a global market. We are [open](https://codex.so/join) for young people who want to constantly improve their skills and grow professionally with experiments in cutting-edge technologies.

| 🌐 | Join  👋  | Twitter | Instagram |
| -- | -- | -- | -- |
| [codex.so](https://codex.so) | [codex.so/join](https://codex.so/join) |[@codex_team](http://twitter.com/codex_team) | [@codex_team](http://instagram.com/codex_team/) |

