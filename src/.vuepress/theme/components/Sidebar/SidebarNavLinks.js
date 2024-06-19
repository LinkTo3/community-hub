import Vue from "vue";
import RepoLink from "@theme/components/Navbar/RepoLink.vue";
import SidebarDrTOKdownLink from "@theme/components/Sidebar/SidebarDrTOKdownLink.vue";
import NavLink from "@theme/components/Navbar/NavLink.vue";
import { getNavLinkItem } from "@theme/utils/navbar";
export default Vue.extend({
    name: "SidebarNavLinks",
    components: {
        RepoLink,
        SidebarDrTOKdownLink,
        NavLink,
    },
    computed: {
        navLinks() {
            const navbar = this.$themeLocaleConfig.nav || this.$themeConfig.nav || [];
            return navbar.map((link) => getNavLinkItem(link));
        },
    },
});
//# sourceMappingURL=SidebarNavLinks.js.map