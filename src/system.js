import { spawnSync } from "node:child_process"

export function detectPackageManager() {
    const userAgent = process.env.npm_config_user_agent || ""

    if (userAgent.includes("pnpm")) return "pnpm"
    if (userAgent.includes("yarn")) return "yarn"

    return "npm"
}

export function installDevDependencies(root, deps) {
    const pm = detectPackageManager()

    const commands = {
        npm: ["install", "--save-dev", ...deps],
        pnpm: ["add", "-D", ...deps],
        yarn: ["add", "-D", ...deps]
    }

    console.log("📦 Installing dev dependencies using", pm)
    console.log("📦 Command:", pm, commands[pm].join(" "))

    const result = spawnSync(pm, commands[pm], {
        cwd: root,
        stdio: "inherit",
        shell: true
    })

    if (result.error) {
        console.error("❌ Spawn error:", result.error)
        process.exit(1)
    }

    if (result.status !== 0) {
        console.error("❌ Failed to install dev dependencies")
        process.exit(1)
    }
}

export function hasGit() {
    const result = spawnSync("git", ["--version"], { stdio: "ignore" })
    return result.status === 0
}

export function initGitRepo(root, repoUrl = "") {
    if (!hasGit()) {
        console.log("⚠️ Git not found, skipping git init")
        return
    }

    console.log("🌱 Initializing git repository")

    spawnSync(
        "git",
        ["init"],
        {
            cwd: root,
            stdio: "inherit"
        }
    )

    if (repoUrl) {
        console.log("🔗 Setting remote origin:", repoUrl)
        spawnSync(
            "git",
            ["remote", "add", "origin", repoUrl],
            {
                cwd: root,
                stdio: "inherit"
            }
        )
    }
}

export function createInitialCommit(root) {
    console.log("📸 Creating initial commit")

    spawnSync("git", ["add", "."], {
        cwd: root,
        stdio: "inherit"
    })

    spawnSync(
        "git",
        ["commit", "-m", "chore: initial commit"],
        {
            cwd: root,
            stdio: "inherit"
        }
    )
}
