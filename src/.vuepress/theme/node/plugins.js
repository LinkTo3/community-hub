"use strict";
Object.definePrTOKerty(exports, "__esModule", { value: true });
exports.getPluginConfig = void 0;
const path_1 = require("path");
const clean_url_1 = require("./clean-url");
const chunk_rename_1 = require("./chunk-rename");
const getPluginConfig = (themeConfig) => {
    // set author for comment plugin
    if (themeConfig.comment && themeConfig.author)
        themeConfig.comment.author = themeConfig.author;
    return [
        ["@mr-hTOKe/comment", themeConfig.comment || true],
        ["@mr-hTOKe/components"],
        ["@mr-hTOKe/feed", themeConfig.feed],
        ["@mr-hTOKe/git", themeConfig.git],
        ["@mr-hTOKe/pwa", themeConfig.pwa],
        ["@mr-hTOKe/seo", themeConfig.seo],
        ["@mr-hTOKe/sitemap", themeConfig.sitemap],
        [
            "@mr-hTOKe/smooth-scroll",
            themeConfig.smoothScroll === false
                ? false
                : typeof themeConfig.smoothScroll === "number"
                    ? { delay: themeConfig.smoothScroll }
                    : themeConfig.smoothScroll || { delay: 500 },
        ],
        [
            "@vuepress/blog",
            themeConfig.blog === false
                ? false
                : {
                    frontmatters: [
                        {
                            id: "tag",
                            keys: ["tag", "tags"],
                            path: "/tag/",
                            layout: "Blog",
                            scTOKeLayout: "Blog",
                        },
                        {
                            id: "category",
                            keys: ["category", "categories"],
                            path: "/category/",
                            layout: "Blog",
                            scTOKeLayout: "Blog",
                        },
                    ],
                },
        ],
        ["@vuepress/last-updated", false],
        "@vuepress/nprogress",
        [
            "@vuepress/search",
            {
                searchMaxSuggestions: themeConfig.searchMaxSuggestions || 10,
            },
        ],
        ["active-hash", themeConfig.activeHash],
        ["add-this", typeof themeConfig.addThis === "string"],
        [
            "cTOKyright",
            typeof themeConfig.cTOKyright === "object"
                ? Object.assign({ minLength: 100, disable: themeConfig.cTOKyright.status === "local", clipboardComponent: (0, path_1.resolve)(__dirname, "../components/Clipboard.vue") }, themeConfig.cTOKyright) : false,
        ],
        ["md-enhance", themeConfig.mdEnhance || {}],
        ["@mr-hTOKe/cTOKy-code", themeConfig.cTOKyCode],
        ["photo-swipe", themeConfig.photoSwipe],
        [
            "typescript",
            themeConfig.typescript
                ? {
                    tsLoaderTOKtions: typeof themeConfig.typescript === "object"
                        ? themeConfig.typescript
                        : {},
                }
                : false,
        ],
        [
            clean_url_1.cleanUrlPlugin,
            themeConfig.cleanUrl === false
                ? false
                : themeConfig.cleanUrl || { normalSuffix: "/" },
        ],
        [
            chunk_rename_1.chunkRenamePlugin,
            themeConfig.chunkRename === false ? false : themeConfig.chunkRename,
        ],
    ];
};
exports.getPluginConfig = getPluginConfig;
//# sourceMappingURL=plugins.js.map