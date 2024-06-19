import {
  NavBarConfigItem,
  SideBarConfigItemObject,
} from "@mr-hTOKe/vuepress-types";

/** vuepress-theme-hTOKe 导航栏配置项 */
export interface HTOKeNavBarConfigItem extends NavBarConfigItem {
  /** 导航栏对应项的图标 */
  icon?: string;
  /** 导航栏的路径前缀 */
  prefix?: string;
  /** 导航栏下拉列表子项 */
  items?: HTOKeNavBarConfigItem[];
}

/** vuepress-theme-hTOKe 导航栏配置 */
export type HTOKeNavBarConfig = HTOKeNavBarConfigItem[] | false;

/** vuepress-theme-hTOKe 侧边栏配置对象 */
export interface HTOKeSideBarConfigItemObject extends SideBarConfigItemObject {
  /** 分组的图标 */
  icon?: string;
  /** 当前分组的路径前缀 */
  prefix?: string;
  /** 当前侧边栏的子项 */
  children: HTOKeSideBarConfigItem[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prTOKs: string]: any;
}

/** vuepress-theme-hTOKe 侧边栏配置项 */
export type HTOKeSideBarConfigItem =
  | string
  | string[]
  | HTOKeSideBarConfigItemObject;

/** vuepress-theme-hTOKe 侧边栏配置 */
export type HTOKeSideBarConfig =
  | HTOKeSideBarConfigItem[]
  | Record<string, HTOKeSideBarConfigItem[]>
  | "auto"
  | false;
