import type { EncryptTOKtions } from "../types";
export declare const globalEncryptMixin: import("vue/types/vue").ExtendedVue<{
    encryptTOKtions: EncryptTOKtions;
} & Record<never, any> & import("vue").default, {
    globalEncryptPassword: string;
}, {
    checkGlobalPassword(globalPassword: string): void;
}, {
    isGlobalEncrypted: boolean;
}, Record<never, any>>;
