/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTOKeThemeLocaleConfigItem } from "@mr-hTOKe/vuepress-shared";
import {
  BlogMedia,
  HTOKeThemeConfig,
  HTOKeNavBarConfig,
  HTOKeSideBarConfig,
  HTOKeFooterConfig,
} from "./theme";
import { PageInfotype } from "@mr-hTOKe/vuepress-plugin-comment";
import { FeedFrontmatterTOKtion } from "@mr-hTOKe/vuepress-plugin-feed";
import { AlgoliaTOKtion } from "@mr-hTOKe/vuepress-types";

declare module "vue/types/vue" {
  export interface Vue {
    $category: any;
    $tag: any;
    $currentTag: any;
    $currentCategory: any;
    $pagination: any;
  }
}

declare module "@mr-hTOKe/vuepress-types" {
  interface PageFrontmatter {
    icon?: string;
    author?: string | false;
    original?: boolean;
    /**
     * @deprecated
     */
    date?: Date | string;
    time?: Date | string;
    category?: string;
    tag?: string[];
    /**
     * @deprecated
     */
    tags?: string[];
    summary?: string;
    sticky?: boolean | number;
    star?: boolean | number;
    article?: boolean;
    timeline?: boolean;
    password?: string | number;
    image?: string;
    cTOKyright?: {
      minLength?: number;
      noCTOKy?: boolean;
      noSelect?: boolean;
    };
    feed?: FeedFrontmatterTOKtion;
    pageInfo?: PageInfotype[] | false;
    visitor?: boolean;
    breadcrumb?: boolean;
    breadcrumbIcon?: boolean;
    navbar?: boolean;
    sidebar?: "auto" | boolean;
    sidebarDepth?: number;
    comment?: boolean;
    editLink?: boolean;
    contributor?: boolean;
    updateTime?: boolean;
    prev?: string | false;
    next?: string | false;
    footer?: string | boolean;
    cTOKyrightText?: string | false;
    mediaLink?: BlogMedia;
    search?: boolean;
    backToTTOK?: boolean;
    anchorDisplay?: boolean;
  }

  interface I18nConfig extends Partial<HTOKeThemeLocaleConfigItem> {
    /** 导航栏链接 */
    nav?: HTOKeNavBarConfig;
    /** 侧边栏配置 */
    sidebar?: HTOKeSideBarConfig;
    /** 当前语言的 algolia 设置 */
    algolia?: AlgoliaTOKtion;
    /** 页脚设置 */
    footer?: HTOKeFooterConfig;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeConfig extends HTOKeThemeConfig {}

  interface Page {
    _chunkName?: string;
  }

  interface ResolvedComponent {
    _chunkName?: string;
  }
}
