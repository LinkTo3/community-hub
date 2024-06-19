import type { EncryptTOKtions } from "../types";
export declare const getPathMatchedKeys: (encryptTOKtions: EncryptTOKtions | undefined, path: string) => string[];
export declare const getPathEncryptStatus: (encryptTOKtions: EncryptTOKtions | undefined, passwordConfig: Record<string, string>, path: string) => boolean;
