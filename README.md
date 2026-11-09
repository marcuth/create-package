# @marcuth/create-package

A personalized CLI tool to quickly bootstrap a new TypeScript package with a predefined set of best practices and tools.

## ✨ Features

- **TypeScript Ready**: Pre-configured `tsconfig.json` for modern Node.js development.
- **ESLint & Prettier**: ESLint flat config (`eslint.config.mjs`) with `typescript-eslint`, `eslint-plugin-unused-imports` and automatic code formatting.
- **AI Agent Instructions**: Generates a `CLAUDE.md`, `GEMINI.md` or `AGENTS.md` file for your coding agent.
- **Private Projects**: The `--private` flag skips the npm publishing files and the MIT license.
- **Testing**: Pre-configured with [Vitest](https://vitest.dev/) for unit testing and code coverage reporting.
- **GitHub Actions CI**: A workflow that formats, runs `lint:fix` and tests on every push/PR, and commits any resulting changes as `github-actions[bot]`.
- **Git Integration**: Automatically initializes a git repository, prompts for a remote origin, creates the initial commit, and sets up `.gitignore` and `.gitattributes`.
- **Package Metadata**: Infers `homepage` and `bugs` URLs from your repository link (GitHub/GitLab) and uses your git `user.name` as the author and license holder.
- **Package Manager Detection**: Intelligently detects whether you are using `npm`, `pnpm`, or `yarn`.

## 🚀 Usage

You can run it directly npm:

```bash
npm create @marcuth/package@latest my-package  # or npm init @marcuth/package@latest my-package
```

Or for scoped packages:

```bash
npm create @marcuth/package@latest @scope/my-package  # or npm init @marcuth/package@latest @scope/my-package
```

### Options

Pass options after `--` when using `npm create`:

| Flag | Description |
| --- | --- |
| `--private` | Creates a private project: adds `"private": true`, uses the `UNLICENSED` license, and skips the MIT `LICENSE`, `.npmignore`, `files` and `publishConfig`. |
| `--claude` | Creates a `CLAUDE.md` agent instruction file (default when no agent flag is passed). |
| `--gemini` | Creates a `GEMINI.md` agent instruction file. |
| `--agents` | Creates an `AGENTS.md` agent instruction file. |

The agent flags can be combined to create more than one file.

```bash
npm create @marcuth/package@latest my-package -- --private
npm create @marcuth/package@latest my-package -- --agents
npm create @marcuth/package@latest my-package -- --claude --gemini
```

## 🛠️ What's Inside the Generated Project?

- **Standard Directory Structure**: 
    - `src/` directory for your TypeScript source code.
    - `__tests__/` directory for your unit tests.
- **Pre-configured Scripts**:
    - `npm run build`: Compiles TypeScript to `dist/`.
    - `npm run dev`: Runs the project using `tsx`.
    - `npm run format`: Formats code using Prettier.
    - `npm run lint`: Checks for linting errors.
    - `npm run lint:fix`: Fixes linting errors and removes unused imports.
    - `npm run test`: Runs your test suite with Vitest.
    - `npm run test:cov`: Generates a code coverage report using Vitest.
- **Standard Files**: `.gitignore`, `.gitattributes`, `.github/dependabot.yml`, `.github/workflows/ci.yml`, `eslint.config.mjs`, `.prettierrc.js`, `tsconfig.json`, `README.md`, and the agent instruction file (`CLAUDE.md` by default).
- **Publishing Files** (skipped with `--private`): `LICENSE` (MIT) and `.npmignore`.

## 📦 Requirements

- Node.js installed.
- Git (optional, but recommended for repository initialization).

## 📄 License

MIT © [Marcuth](https://github.com/marcuth)
