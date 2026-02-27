import path from "node:path"
import readline from "node:readline/promises"
import { getInputName, parsePackageName } from "./input.js"
import {
    createDirectories,
    writePackageJson,
    writeTsConfig,
    writeSourceFile,
    writeLicenseFile,
    writeGitignoreFile,
    writeGitAttributes,
    createNpmIgnore,
    createReadme,
    createEsLintRcConfig,
    createPrettierConfig
} from "./writers.js"
import { installDevDependencies, initGitRepo, createInitialCommit } from "./system.js"

export async function main() {
    const inputName = getInputName()
    const { packageName, projectDir } = parsePackageName(inputName)
    const root = path.resolve(process.cwd(), projectDir)

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const repoUrl = await rl.question("🔗 Repository URL (optional): ")

    rl.close()

    const devDependencies = [
        "@types/node",
        "ts-node",
        "typescript",
        "prettier",
        "prettier-plugin-sort-imports",
        "eslint",
        "eslint-config-prettier",
        "eslint-plugin-prettier",
        "eslint-plugin-unused-imports"
    ]

    createDirectories(root)
    writePackageJson(root, packageName, repoUrl)
    writeTsConfig(root)
    writeSourceFile(root, projectDir)
    writeLicenseFile(root)
    writeGitignoreFile(root)
    writeGitAttributes(root)
    installDevDependencies(root, devDependencies)
    initGitRepo(root, repoUrl)
    createNpmIgnore(root)
    createReadme(root, packageName)
    createEsLintRcConfig(root)
    createPrettierConfig(root)
    createInitialCommit(root)

    console.log("✅ Creeated project")
    console.log("📦 Package:", packageName)
    console.log("📁 Folder:", projectDir)
}
