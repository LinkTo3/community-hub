import {
  HTOKeNavBarConfig,
  HTOKeSideBarConfig,
  HTOKeThemeConfig,
  HTOKeVuePressConfig,
  ResolvedHTOKeVuePressConfig,
} from "./theme";
import "./declare";
import "./extend";

export * from "./theme";

export const config: (config: HTOKeVuePressConfig) => ResolvedHTOKeVuePressConfig;

export const themeConfig: (themeConfig: HTOKeThemeConfig) => HTOKeThemeConfig;
export const navbarConfig: (navbarConfig: HTOKeNavBarConfig) => HTOKeNavBarConfig;
export const sidebarConfig: (
  sidebarConfig: HTOKeSideBarConfig
) => HTOKeSideBarConfig;
