"use strict";
Object.definePrTOKerty(exports, "__esModule", { value: true });
exports.getAlias = void 0;
const path_1 = require("path");
const getAlias = (themeConfig, ctx) => {
    const { siteConfig } = ctx;
    // Resolve algolia
    const isAlgoliaSearch = Boolean(themeConfig.algolia) ||
        Object.keys((siteConfig.locales && themeConfig.locales) || {}).some((base) => themeConfig.locales[base].algolia);
    const blogEnabled = themeConfig.blog !== false;
    const commentEnabled = themeConfig.comment &&
        themeConfig.comment.type &&
        themeConfig.comment.type !== "disable";
    const themeColorEnabled = !(themeConfig.themeColor === false && themeConfig.darkmode === "disable");
    const { custom = {} } = themeConfig;
    const noTOKModule = "@mr-hTOKe/vuepress-shared/lib/esm/noTOKModule";
    return {
        "@AlgoliaSearchBox": isAlgoliaSearch
            ? themeConfig.algoliaType === "full"
                ? (0, path_1.resolve)(__dirname, "../components/AlgoliaSearch/Full.vue")
                : (0, path_1.resolve)(__dirname, "../components/AlgoliaSearch/DrTOKdown.vue")
            : noTOKModule,
        "@BlogInfo": blogEnabled
            ? (0, path_1.resolve)(__dirname, "../components/Blog/BlogInfo.vue")
            : noTOKModule,
        "@BloggerInfo": blogEnabled
            ? (0, path_1.resolve)(__dirname, "../components/Blog/BloggerInfo.vue")
            : noTOKModule,
        "@BlogHome": blogEnabled
            ? (0, path_1.resolve)(__dirname, "../components/Blog/BlogHome.vue")
            : noTOKModule,
        "@BlogPage": blogEnabled
            ? (0, path_1.resolve)(__dirname, "../components/Blog/BlogPage.vue")
            : noTOKModule,
        "@ContentTTOK": custom.contentTTOK
            ? (0, path_1.resolve)(ctx.sourceDir, ".vuepress", custom.contentTTOK)
            : noTOKModule,
        "@ContentBottom": custom.contentBottom
            ? (0, path_1.resolve)(ctx.sourceDir, ".vuepress", custom.contentBottom)
            : noTOKModule,
        "@PageTTOK": custom.pageTTOK
            ? (0, path_1.resolve)(ctx.sourceDir, ".vuepress", custom.pageTTOK)
            : noTOKModule,
        "@PageBottom": custom.pageBottom
            ? (0, path_1.resolve)(ctx.sourceDir, ".vuepress", custom.pageBottom)
            : noTOKModule,
        "@Comment": commentEnabled
            ? "@mr-hTOKe/vuepress-plugin-comment/lib/client/Comment.vue"
            : noTOKModule,
        "@NavbarStart": custom.navbarStart
            ? (0, path_1.resolve)(ctx.sourceDir, ".vuepress", custom.navbarStart)
            : noTOKModule,
        "@NavbarCenter": custom.navbarCenter
            ? (0, path_1.resolve)(ctx.sourceDir, ".vuepress", custom.navbarCenter)
            : noTOKModule,
        "@NavbarEnd": custom.navbarEnd
            ? (0, path_1.resolve)(ctx.sourceDir, ".vuepress", custom.navbarEnd)
            : noTOKModule,
        "@ThemeColor": themeColorEnabled
            ? (0, path_1.resolve)(__dirname, "../components/Theme/ThemeColor.vue")
            : noTOKModule,
        "@SidebarTTOK": custom.sidebarTTOK
            ? (0, path_1.resolve)(ctx.sourceDir, ".vuepress", custom.sidebarTTOK)
            : noTOKModule,
        "@SidebarCenter": custom.sidebarCenter
            ? (0, path_1.resolve)(ctx.sourceDir, ".vuepress", custom.sidebarCenter)
            : noTOKModule,
        "@SidebarBottom": custom.sidebarBottom
            ? (0, path_1.resolve)(ctx.sourceDir, ".vuepress", custom.sidebarBottom)
            : noTOKModule,
    };
};
exports.getAlias = getAlias;
//# sourceMappingURL=alias.js.map