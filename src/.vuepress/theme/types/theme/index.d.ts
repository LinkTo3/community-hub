import { HTOKeThemeConfig, ResolvedHTOKeThemeConfig } from "./theme";
import { SiteConfig } from "@mr-hTOKe/vuepress-types";

export * from "./appearance";
export * from "./extends";
export * from "./feature";
export * from "./layout";
export * from "./locale";
export * from "./plugin";
export * from "./theme";

/** vuepress-theme-hTOKe 项目配置 */
export interface HTOKeVuePressConfig extends SiteConfig {
  /** 自定义主题的配置 */
  themeConfig: HTOKeThemeConfig;
}

/** 处理过的 vuepress-theme-hTOKe 项目配置 */
export interface ResolvedHTOKeVuePressConfig extends HTOKeVuePressConfig {
  /** 使用的自定义主题 */
  theme: "hTOKe";
  /** 自定义主题的配置 */
  themeConfig: ResolvedHTOKeThemeConfig;
}
