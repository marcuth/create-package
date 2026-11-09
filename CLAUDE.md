# CLAUDE.md

CLI (`@marcuth/create-package`) that scaffolds a new TypeScript package with ESLint, Prettier, Vitest, git and Dependabot preconfigured.

## Commands

- `npm run playground`: runs the generator in `playground/debug_test` (git-ignored). Use it to test changes.
- There is no build, lint or test setup in this repository: it is plain ESM JavaScript (`"type": "module"`).

## Structure

- `bin/index.js`: binary entrypoint.
- `src/index.js`: main flow (`main`): asks for the repository URL, defines the devDependencies, writes the files, installs, initializes git and makes the initial commit.
- `src/writers.js`: one writer per generated file (package.json, tsconfig, eslint, prettier, gitignore, CLAUDE.md, etc.).
- `src/system.js`: package manager detection (npm/pnpm/yarn), install, git helpers and git user name lookup.
- `src/input.js`: package name parsing (scoped or not) and the `--private` flag.

## Conventions

- 4-space indentation, no semicolons, double quotes.
- To generate a new file in the created project, add a `createX`/`writeX` function in `src/writers.js` and call it from `src/index.js`.
- The generated project's dependencies live in the `devDependencies` list in `src/index.js`.
- `--private` skips the MIT `LICENSE` and `.npmignore` and marks `package.json` as private/UNLICENSED.
- Generated configs use the tools' current formats (ESLint flat config in `eslint.config.mjs`). The generated `.prettierrc.js` uses CommonJS.
- `typescript` is pinned to `^6` because `typescript-eslint` does not support TS 7 yet.
- Commit messages follow Conventional Commits (`feat:`, `chore:`, `docs:`).
