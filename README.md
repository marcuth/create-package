# @marcuth/create-package

A personalized CLI tool to quickly bootstrap a new TypeScript package with a predefined set of best practices and tools.

## ✨ Features

- **TypeScript Ready**: Pre-configured `tsconfig.json` for modern Node.js development.
- **ESLint & Prettier**: Full linting setup including `eslint-plugin-unused-imports` and automatic code formatting.
- **Testing**: Pre-configured with [Vitest](https://vitest.dev/) for unit testing and code coverage reporting.
- **Git Integration**: Automatically initializes a git repository, prompts for a remote origin, and sets up `.gitignore` and `.gitattributes`.
- **Package Metadata**: Infers `homepage` and `bugs` URLs from your repository link (GitHub/GitLab).
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

## 🛠️ What's Inside the Generated Project?

- **Standard Directory Structure**: 
    - `src/` directory for your TypeScript source code.
    - `__tests__/` directory for your unit tests.
- **Pre-configured Scripts**:
    - `npm run build`: Compiles TypeScript to `dist/`.
    - `npm run dev`: Runs the project using `tsx`.
    - `npm run format`: Formats code using Prettier.
    - `npm run lint`: Checks for linting errors and removes unused imports.
    - `npm run test`: Runs your test suite with Vitest.
    - `npm run test:cov`: Generates a code coverage report using Vitest.
- **Standard Files**: `.gitignore`, `.gitattributes`, `.github/dependabot.yml`, `LICENSE` (MIT), `README.md`, and `.npmignore`.

## 📦 Requirements

- Node.js installed.
- Git (optional, but recommended for repository initialization).

## 📄 License

MIT © [Marcuth](https://github.com/marcuth)
