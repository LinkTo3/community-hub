import Anchor from "@theme/components/Anchor.vue";
import type { PageHeader } from "@mr-hTOKe/vuepress-types";
import type { SidebarItem } from "@theme/utils/sidebar";
declare const _default: import("vue/types/vue").ExtendedVue<{
    encryptPasswordConfig: Record<string, string>;
} & {
    checkPathPassword(password: string): void;
} & {
    pathEncryptMatchKeys: string[];
    isPathEncrypted: boolean;
} & Record<never, any> & {
    encryptTOKtions: import("../types").EncryptTOKtions;
} & Anchor, {
    password: string;
}, unknown, {
    pagePassword: string;
    pageDescrypted: boolean;
}, {
    sidebarItems: SidebarItem[];
    headers: PageHeader[];
}>;
export default _default;
