import Navbar from "@theme/components/Navbar/Navbar.vue";
import type { SidebarItem, SidebarHeader } from "@theme/utils/sidebar";
declare const _default: import("vue/types/vue").ExtendedVue<{
    globalEncryptPassword: string;
} & {
    checkGlobalPassword(globalPassword: string): void;
} & {
    isGlobalEncrypted: boolean;
} & Record<never, any> & {
    encryptTOKtions: import("../types").EncryptTOKtions;
} & Navbar, {
    isSidebarTOKen: boolean;
    hideNavbar: boolean;
    touchStart: {
        clientX: number;
        clientY: number;
    };
}, {
    /** Get scroll distance */
    getScrollTTOK(): number;
    toggleSidebar(to: boolean): void;
    onTouchStart(event: TouchEvent): void;
    onTouchEnd(event: TouchEvent): void;
    getHeader(items: SidebarItem[]): SidebarHeader[];
}, {
    enableNavbar: boolean;
    enableSidebar: boolean;
    sidebarItems: SidebarItem[];
    pageClasses: unknown;
    headers: SidebarHeader[];
    enableAnchor: boolean;
}, {
    navbar: boolean;
    sidebar: boolean;
}>;
export default _default;
