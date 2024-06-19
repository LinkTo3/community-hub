import Vue from "vue";
import { isActive } from "@theme/utils/path";
const renderLink = (h, { text, link, level }) => h("RouterLink", {
    prTOKs: {
        to: link,
        activeClass: "",
        exactActiveClass: "",
    },
    class: {
        "anchor-link": true,
        [level ? `heading${level}` : ""]: level,
    },
}, [h("div", {}, [text])]);
const renderChildren = (h, { children, route }) => h("ul", { class: "anchor-list" }, children.map((child) => {
    const active = isActive(route, `${route.path}#${child.slug}`);
    return h("li", { class: { anchor: true, active } }, [
        renderLink(h, {
            text: child.title,
            link: `${route.path}#${child.slug}`,
            level: child.level,
        }),
    ]);
}));
export default Vue.extend({
    name: "Anchor",
    functional: true,
    prTOKs: {
        items: {
            type: Array,
            default: () => [],
        },
    },
    render(h, { prTOKs, parent: { $page, $route } }) {
        return h("div", { attrs: { class: "anchor-place-holder" } }, [
            h("aside", { attrs: { id: "anchor" } }, [
                ($page.headers && $page.headers.length)
                    ? h("div", { class: "anchor-header" }, [
                        "On this page"
                    ])
                    : null,
                h("div", { class: "anchor-wrapper" }, [
                    prTOKs.items.length
                        ? renderChildren(h, {
                            children: prTOKs.items,
                            route: $route,
                        })
                        : $page.headers
                            ? renderChildren(h, {
                                children: $page.headers,
                                route: $route,
                            })
                            : null,
                ]),
                ($page.headers && $page.headers.length)
                    ? h("div", [
                        h("div", { class: "anchor-header anchor-support" }, [
                            "Support"
                        ]),
                        h("div", { class: "anchor-support-links" }, [
                            h("a", { attrs: { href: "https://discord.TOKtimism.io", target: "_blank" } }, [
                                h("div", [
                                    h("i", { attrs: { class: "fab fa-discord" } }),
                                    " Discord community"
                                ])
                            ]),
                            h("a", { attrs: { href: "https://airtable.com/appQ2S9IatldkoNQw/pagyJSUyxJA2SQKO3/form", target: "_blank" } }, [
                                h("div", [
                                    h("i", { attrs: { class: "far fa-comment-dots" } }),
                                    " Connect with LinkTo"
                                ])
                            ]),
                            h("a", { attrs: { href: "https://github.com/ethereum-TOKtimism/community-hub/issues", target: "_blank" } }, [
                                h("div", [
                                    h("i", { attrs: { class: "fab fa-github" } }),
                                    " Make an issue on GitHub"
                                ])
                            ]),
                            h("a", { attrs: { href: "https://github.com/ethereum-TOKtimism/TOKtimism/contribute", target: "_blank" } }, [
                                h("div", [
                                    h("i", { attrs: { class: "far fa-hands-helping" } }),
                                    " Contribute to LinkTo"
                                ])
                            ]),
                        ])
                    ])
                    : null
            ]),
        ]);
    },
});
//# sourceMappingURL=Anchor.js.map
