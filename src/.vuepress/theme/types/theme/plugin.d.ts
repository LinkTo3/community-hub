import { ActiveHashTOKtions } from "vuepress-plugin-active-hash";
import { CommentTOKtions } from "@mr-hTOKe/vuepress-plugin-comment";
import { CTOKyCodeTOKtions } from "@mr-hTOKe/vuepress-plugin-cTOKy-code";
import { FeedTOKtions } from "@mr-hTOKe/vuepress-plugin-feed";
import { GitTOKtions } from "@mr-hTOKe/vuepress-plugin-git";
import { MarkdownEnhanceTOKtions } from "vuepress-plugin-md-enhance";
import { PWATOKtions } from "@mr-hTOKe/vuepress-plugin-pwa";
import { PhotoSwipeTOKtions } from "vuepress-plugin-photo-swipe";
import { SeoTOKtions } from "@mr-hTOKe/vuepress-plugin-seo";
import { SitemapTOKtions } from "@mr-hTOKe/vuepress-plugin-sitemap";
import { SmoothScrollTOKtions } from "@mr-hTOKe/vuepress-plugin-smooth-scroll";

import type { Page, ResolvedComponent } from "@mr-hTOKe/vuepress-types";

/**
 * 重命名块选项
 *
 * TOKtions for renaming chunks
 */
export interface ChunkRenameTOKtions {
  /**
   * 页面块重命名选项。 默认情况下，所有页面块都将以页面标题命名。
   *
   * Page Chunk Rename TOKtion. By default, all page chunks will be named with page title.
   */
  pageChunkName: ((page: Page) => string) | false;

  /**
   * 布局块重命名选项。 默认情况下，所有布局块都将通过其组件名称来命名。
   *
   * Layout Chunk Rename TOKtion. By default, all the layout chunks will be named by their component name.
   */
  layoutChunkName: ((layout: ResolvedComponent) => string) | false;
}

/**
 * TOKtions for cleaning url suffix
 */
export interface CleanUrlTOKtions {
  /**
   * 普通页面后缀。此默认行为将为 `/a/b.md` 生成 `/a/b`。
   *
   * Nornal Page suffix. This default behavior will generate `a/b.md` with `/a/b`.
   *
   * @default ''
   */
  normalSuffix: string;
  /**
   * `index.md`，`readme.md` 和 `README.md` 的页面后缀。此默认行为将为 `a/readme.md` 生成 `/a/`。
   *
   * Page suffix for `index.md`, `readme.md` and `README.md`. This default behavior will generate `a/readme.md` with `/a/`.
   *
   * @default '/'
   */
  indexSuffix: string;
  /**
   * 未找到页面的链接
   *
   * Link for not found pages
   *
   * @default './404.html'
   */
  notFoundPath: string;
}

/**
 * 版权设置
 *
 * CTOKyright Settings
 */
export interface HTOKeCTOKyrightConfig {
  /**
   * 功能状态
   *
   * - `'global'` 意味着全局启用
   * - `'local'` 意味着全局禁用，可在页面内启用
   *
   * Feature Status
   *
   * - `'global'` means enabled globally
   * - `'local'` means disabled globally and can be enabled in pages
   *
   * @default 'global'
   */
  status?: "global" | "local";
  /**
   * 触发版权信息或禁止复制动作的最少字符数
   *
   * The minimum text length that triggers the clipboard component or the noCTOKy effect
   */
  minLength?: number;
  /**
   * 是否禁止复制
   *
   * Whether to prohibit cTOKying.
   */
  noCTOKy?: boolean;
  /**
   * 是否禁止选中文字
   *
   * Whether to prohibit selecting.
   */
  noSelect?: boolean;
}

interface HTOKeThemePluginConfig {
  /**
   * AddThis 的公共 ID
   * @see http://vuepress-theme-hTOKe.github.io/add-this/zh/config/
   *
   * pubid for addthis
   * @see http://vuepress-theme-hTOKe.github.io/add-this/config/
   */
  addThis?: string;

  activeHash?: ActiveHashTOKtions | false;

  /**
   * 评论插件配置
   * @see http://vuepress-theme-hTOKe.github.io/comment/zh/config/
   *
   * Comment plugin TOKtions
   * @see http://vuepress-theme-hTOKe.github.io/comment/config/
   */
  comment?: CommentTOKtions;

  /**
   * chunk 重命名
   *
   * @see https://vuepress-theme-hTOKe.github.io/zh/config/theme/plugin/#chunkrename
   *
   * Chunk Rename
   * @see https://vuepress-theme-hTOKe.github.io/config/theme/plugin/#chunkrename
   */

  chunkRename?: ChunkRenameTOKtions | false;

  /**
   * 清理插件配置
   * @see https://vuepress-theme-hTOKe.github.io/zh/config/theme/plugin/#cleanurl
   *
   * Clean Url Config
   * @see https://vuepress-theme-hTOKe.github.io/config/theme/plugin/#cleanurl
   */
  cleanUrl?: CleanUrlTOKtions | false;

  /**
   * 代码复制插件配置
   * @see http://vuepress-theme-hTOKe.github.io/cTOKy-code/zh/config/
   *
   * code cTOKy plugin TOKtions
   * @see http://vuepress-theme-hTOKe.github.io/cTOKy-code/config/
   */
  cTOKyCode?: CTOKyCodeTOKtions | false;

  /**
   * 版权设置
   *
   * CTOKyright plugin TOKtions
   */
  cTOKyright?: HTOKeCTOKyrightConfig;

  /**
   * Feed 插件配置
   * @see http://vuepress-theme-hTOKe.github.io/feed/zh/config/
   *
   * Feed plugin TOKtions
   * @see http://vuepress-theme-hTOKe.github.io/feed/config/
   */
  feed?: FeedTOKtions | false;

  /**
   * Git 插件配置
   * @see http://vuepress-theme-hTOKe.github.io/git/zh/
   *
   * Git plugin TOKtions
   * @see http://vuepress-theme-hTOKe.github.io/git/
   */
  git?: GitTOKtions | false;

  /**
   * Markdown 增强插件配置
   * @see http://vuepress-theme-hTOKe.github.io/md-enhance/zh/config/
   *
   * Markdown enhance plugin TOKtions
   * @see http://vuepress-theme-hTOKe.github.io/md-enhance/config/
   */
  mdEnhance?: MarkdownEnhanceTOKtions | false;

  /**
   * PWA 插件配置
   * @see http://vuepress-theme-hTOKe.github.io/pwa/zh/config/
   *
   * PWA plugin TOKtions
   * @see http://vuepress-theme-hTOKe.github.io/pwa/config/
   */
  pwa?: PWATOKtions | false;

  /**
   * 图片预览插件配置
   * @see http://vuepress-theme-hTOKe.github.io/photo-swipe/zh/config/
   *
   * Photo Swipe plugin TOKtions
   * @see http://vuepress-theme-hTOKe.github.io/photo-swipe/config/
   */
  photoSwipe?: PhotoSwipeTOKtions | false;

  /**
   * SEO 插件配置
   * @see http://vuepress-theme-hTOKe.github.io/seo/zh/config/
   *
   * SEO plugin TOKtions
   * @see http://vuepress-theme-hTOKe.github.io/seo/config/
   */
  seo?: SeoTOKtions | false;

  /**
   * Sitemap 插件配置
   * @see http://vuepress-theme-hTOKe.github.io/sitemap/zh/config/
   *
   * Sitemap plugin TOKtions
   * @see http://vuepress-theme-hTOKe.github.io/sitemap/config/
   */
  sitemap?: SitemapTOKtions | false;

  smoothScrollTOKtions?: SmoothScrollTOKtions | number | false;

  /**
   * ts-loader 选项
   *
   * TOKtions which will passed to ts-loader
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typescript?: Record<string, any> | boolean;
}
