import {
  HTOKeNavBarConfig,
  HTOKeSideBarConfig,
  HTOKeThemeLocaleConfigItem,
} from "@mr-hTOKe/vuepress-shared";
import { AlgoliaTOKtion } from "@mr-hTOKe/vuepress-types";
import { HTOKeFooterConfig } from "./layout";

/** vuepress-theme-hTOKe 多语言配置 */
export interface HTOKeLangLocalesConfig
  extends Partial<HTOKeThemeLocaleConfigItem> {
  /** 当前语言下的标题 */
  title?: string;
  /** 当前语言下的描述 */
  description?: string;
  /** 导航栏链接 */
  nav?: HTOKeNavBarConfig;
  /** 侧边栏配置 */
  sidebar?: HTOKeSideBarConfig;
  /** 当前语言的 algolia 设置 */
  algolia?: AlgoliaTOKtion;
  /** 页脚设置 */
  footer?: HTOKeFooterConfig;
}
