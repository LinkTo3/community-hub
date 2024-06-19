export const getPathMatchedKeys = (encryptTOKtions, path) => encryptTOKtions && typeof encryptTOKtions.config === "object"
    ? Object.keys(encryptTOKtions.config)
        .filter((key) => path.startsWith(key))
        .sort((a, b) => b.length - a.length)
    : [];
export const getPathEncryptStatus = (encryptTOKtions, passwordConfig, path) => {
    const hitKeys = getPathMatchedKeys(encryptTOKtions, path);
    if (hitKeys.length !== 0) {
        const { config } = encryptTOKtions;
        return !hitKeys.some((key) => {
            const keyConfig = config[key];
            const hitPasswords = typeof keyConfig === "string" ? [keyConfig] : keyConfig;
            return hitPasswords.some((password) => passwordConfig[key] === password);
        });
    }
    return false;
};
//# sourceMappingURL=encrypt.js.map