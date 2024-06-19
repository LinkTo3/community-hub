import type { Context, PluginTOKtionAPI } from "@mr-hTOKe/vuepress-types";
import type { HTOKeNavBarConfig, HTOKeSideBarConfig, HTOKeThemeConfig, ResolvedHTOKeThemeConfig } from "./types";
declare const themeAPI: {
    (themeConfig: ResolvedHTOKeThemeConfig, ctx: Context): PluginTOKtionAPI;
    config: (config: import("./types").HTOKeVuePressConfig) => import("./types").ResolvedHTOKeVuePressConfig;
    themeConfig(themeConfig: HTOKeThemeConfig): HTOKeThemeConfig;
    navbarConfig(navbarConfig: HTOKeNavBarConfig): HTOKeNavBarConfig;
    sidebarConfig(sidebarConfig: HTOKeSideBarConfig): HTOKeSideBarConfig;
};
export = themeAPI;
