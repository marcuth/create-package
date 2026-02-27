export function getInputName() {
    return process.argv[2] || "my-package"
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
