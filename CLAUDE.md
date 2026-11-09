# CLAUDE.md

CLI (`@marcuth/create-package`) que gera um novo pacote TypeScript com ESLint, Prettier, Vitest, git e Dependabot pré-configurados.

## Comandos

- `npm run playground`: executa o gerador em `playground/debug_test` (pasta ignorada pelo git). Use para testar mudanças.
- Não há build, lint nem testes neste repositório: é JavaScript ESM puro (`"type": "module"`).

## Estrutura

- `bin/index.js`: entrypoint do binário.
- `src/index.js`: fluxo principal (`main`): pergunta a URL do repositório, define as devDependencies, escreve os arquivos, instala, inicializa o git e faz o commit inicial.
- `src/writers.js`: um writer por arquivo gerado (package.json, tsconfig, eslint, prettier, gitignore, etc.).
- `src/system.js`: detecção do gerenciador de pacotes (npm/pnpm/yarn) e comandos de instalação e git.
- `src/input.js`: leitura e parse do nome do pacote (com ou sem escopo).

## Convenções

- Indentação de 4 espaços, sem ponto e vírgula, aspas duplas.
- Para gerar um novo arquivo no projeto criado, adicione uma função `createX`/`writeX` em `src/writers.js` e chame-a em `src/index.js`.
- Dependências do projeto gerado ficam na lista `devDependencies` de `src/index.js`.
- Configs geradas usam o formato atual das ferramentas (ESLint flat config em `eslint.config.mjs`). O `prettier.config.js` gerado usa CommonJS.
- Mensagens de commit seguem Conventional Commits (`feat:`, `chore:`, `docs:`).
