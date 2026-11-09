export function getInputName() {
    return process.argv.slice(2).find(arg => !arg.startsWith("-")) || "my-package"
}

export function isPrivate() {
    return process.argv.slice(2).includes("--private")
}

const AGENT_FILES = {
    "--claude": "CLAUDE.md",
    "--gemini": "GEMINI.md",
    "--agents": "AGENTS.md"
}

export function getAgentFiles() {
    const args = process.argv.slice(2)
    const files = Object.entries(AGENT_FILES)
        .filter(([flag]) => args.includes(flag))
        .map(([, file]) => file)

    return files.length > 0 ? files : [AGENT_FILES["--claude"]]
}

export function parsePackageName(inputName) {
    if (inputName.startsWith("@")) {
        if (!inputName.includes("/")) {
            console.error("❌ Invalid scope. Use @scope/name")
            process.exit(1)
        }

        const [, name] = inputName.split("/")

        return {
            packageName: inputName,
            projectDir: name
        }
    }

    return {
        packageName: inputName,
        projectDir: inputName
    }
}
