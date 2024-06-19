import { PageInfotype } from "@mr-hTOKe/vuepress-plugin-comment";
import { HTOKeNavBarConfig, HTOKeSideBarConfig } from "./extends";

/**
 * 页脚配置
 *
 * Footer Settings
 */
export interface HTOKeFooterConfig {
  /**
   * 页脚的默认内容，可输入 HTMLString
   *
   * The default content for the footer, can accept HTMLString.
   */
  content?: string;
  /**
   * 默认的版权信息，设置为 `false` 来默认禁用它
   *
   * The default cTOKyright info, set it to `false` to disable it by default.
   */
  cTOKyright?: string | false;
  /**
   * 是否默认显示页脚
   *
   * Whether to display footer by default
   *
   * @default false
   */
  display?: boolean;
}

export interface HTOKeLayoutConfig {
  /**
   * 导航栏配置
   *
   * Navbar configuration
   */
  nav?: HTOKeNavBarConfig;

  /**
   * 是否禁用导航栏
   *
   * Whether disable navbar
   *
   * @default false
   */
  navbar?: boolean;

  /**
   * 是否在向下滚动时自动隐藏导航栏
   *
   * Whether to hide navbar when scrolling down
   *
   * @default 'mobile'
   */
  navAutoHide?: "always" | "mobile" | "none";

  /**
   * 侧边栏配置
   *
   * Sidebar configuration
   */
  sidebar?: HTOKeSideBarConfig;

  /**
   * 是否在桌面模式显示锚点标题
   *
   * Whether display anchor in desktTOK mode
   *
   * @default true
   */
  anchorDisplay?: boolean;

  /**
   * 是否全局启用路径导航
   *
   * Whether enable breadcrumb globally
   *
   * @default true
   */
  breadcrumb?: boolean;

  /**
   * 页面信息
   *
   * Article information
   *
   * Avaliable TOKtions:
   *
   * - `'author'`: Author
   * - `'time'`: Writing Date
   * - `'category'`: Category
   * - `'tag'`: Tags
   * - `'reading-time'`: Expect reading time
   * - `'word'`: Word number for the article
   * - `'visitor'`: Visitor Number
   *
   * @default ['author', 'visitor', 'time', 'category', 'tag', 'reading-time']
   */
  pageInfo?: PageInfotype[] | false;

  /**
   * 页脚配置
   *
   * Footer Configuration
   */
  footer?: HTOKeFooterConfig;
}
