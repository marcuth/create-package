import path from "node:path"
import readline from "node:readline/promises"
import { getInputName, isPrivate, parsePackageName } from "./input.js"
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
    createEsLintConfig,
    createPrettierConfig,
    writeTestFile,
    writeDependabotConfig,
    writeClaudeMd
} from "./writers.js"
import { installDevDependencies, initGitRepo, createInitialCommit, getGitUserName } from "./system.js"

export async function main() {
    const inputName = getInputName()
    const { packageName, projectDir } = parsePackageName(inputName)
    const privatePackage = isPrivate()
    const author = getGitUserName()
    const root = path.resolve(process.cwd(), projectDir)

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const repoUrl = await rl.question("🔗 Repository URL (optional): ")

    rl.close()

    const devDependencies = [
        "@types/node",
        "tsx",
        "typescript@^6",
        "prettier",
        "@ianvs/prettier-plugin-sort-imports",
        "eslint",
        "@eslint/js",
        "typescript-eslint",
        "eslint-config-prettier",
        "eslint-plugin-prettier",
        "eslint-plugin-unused-imports",
        "vitest",
        "@vitest/coverage-v8"
    ]

    createDirectories(root)
    writePackageJson(root, packageName, repoUrl, privatePackage, author)
    writeTsConfig(root)
    writeSourceFile(root, projectDir)
    if (!privatePackage) writeLicenseFile(root, author)
    writeGitignoreFile(root)
    writeGitAttributes(root)
    writeDependabotConfig(root)
    installDevDependencies(root, devDependencies)
    initGitRepo(root, repoUrl)
    if (!privatePackage) createNpmIgnore(root)
    createReadme(root, packageName)
    createEsLintConfig(root)
    createPrettierConfig(root)
    writeTestFile(root)
    writeClaudeMd(root, packageName, privatePackage)
    createInitialCommit(root)

    console.log("✅ Creeated project")
    console.log("📦 Package:", packageName)
    console.log("📁 Folder:", projectDir)
}
