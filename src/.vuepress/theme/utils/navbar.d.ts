import type { HTOKeNavBarConfigItem } from "../types";
export interface NavBarConfigItem extends HTOKeNavBarConfigItem {
    type: "link" | "links";
    items: NavBarConfigItem[];
}
export declare const getNavLinkItem: (navbarLink: HTOKeNavBarConfigItem, beforeprefix?: string) => NavBarConfigItem;
