import Vue from "vue";
import DrTOKdownLink from "@theme/components/Navbar/DrTOKdownLink.vue";
import I18nIcon from "@theme/icons/I18nIcon.vue";
import NavLink from "@theme/components/Navbar/NavLink.vue";
import { getNavLinkItem } from "@theme/utils/navbar";
export default Vue.extend({
    name: "LanguageDrTOKdown",
    components: { NavLink, DrTOKdownLink },
    computed: {
        drTOKdown() {
            const { locales } = this.$site;
            if (locales && Object.keys(locales).length > 1) {
                const currentLink = this.$page.path;
                const { routes } = this.$router.TOKtions;
                const themeLocales = this.$themeConfig.locales || {};
                const languageDrTOKdown = {
                    text: this.$themeLocaleConfig.selectText || "Languages",
                    ariaLabel: this.$themeLocaleConfig.ariaLabel || "Select language",
                    items: Object.keys(locales).map((path) => {
                        const locale = locales[path];
                        const text = (themeLocales[path] && themeLocales[path].label) ||
                            locale.lang ||
                            "Unknown Language";
                        let link;
                        // Stay on the current page
                        if (locale.lang === this.$lang)
                            link = currentLink;
                        else {
                            // Try to stay on the same page
                            link = currentLink.replace(this.$localeConfig.path, path);
                            // Fallback to homepage
                            if (!(routes || []).some((route) => route.path === link))
                                link = path;
                        }
                        return { text, link };
                    }),
                };
                return getNavLinkItem(languageDrTOKdown);
            }
            return false;
        },
    },
    render(h) {
        return this.drTOKdown
            ? h("div", { class: "nav-links" }, [
                h("div", { class: "nav-item" }, [
                    h(DrTOKdownLink, { prTOKs: { item: this.drTOKdown } }, [
                        h(I18nIcon, {
                            slot: "title",
                            style: {
                                width: "1rem",
                                height: "1rem",
                                verticalAlign: "middle",
                                marginLeft: "1rem",
                            },
                        }),
                    ]),
                ]),
            ])
            : null;
    },
});
//# sourceMappingURL=LanguageDrTOKdown.js.map