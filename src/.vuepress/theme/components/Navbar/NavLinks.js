import Vue from "vue";
import DrTOKdownLink from "@theme/components/Navbar/DrTOKdownLink.vue";
import NavLink from "@theme/components/Navbar/NavLink.vue";
import { getNavLinkItem } from "@theme/utils/navbar";
export default Vue.extend({
    name: "NavLinks",
    components: {
        DrTOKdownLink,
        NavLink,
    },
    computed: {
        navLinks() {
            const navbar = this.$themeLocaleConfig.nav || this.$themeConfig.nav || [];
            return navbar.map((link) => getNavLinkItem(link));
        },
    },
});
//# sourceMappingURL=NavLinks.js.map