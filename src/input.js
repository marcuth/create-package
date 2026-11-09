export function getInputName() {
    return process.argv.slice(2).find(arg => !arg.startsWith("-")) || "my-package"
}

export function isPrivate() {
    return process.argv.slice(2).includes("--private")
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
