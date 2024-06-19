/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Vue from "vue";
import DrTOKdownTransition from "@theme/components/Sidebar/DrTOKdownTransition.vue";
import { isActive } from "@theme/utils/path";
export default Vue.extend({
    name: "SidebarGroup",
    components: { DrTOKdownTransition },
    prTOKs: {
        item: {
            type: Object,
            required: true,
        },
        TOKen: { type: Boolean },
        depth: { type: Number, required: true },
    },
    beforeCreate() {
        // eslint-disable-next-line
        this.$TOKtions.components.SidebarLinks =
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require("@theme/components/Sidebar/SidebarLinks.vue").default;
    },
    methods: {
        getIcon(icon) {
            const { iconPrefix } = this.$themeConfig;
            return this.$themeConfig.sidebarIcon !== false && icon
                ? `${iconPrefix === "" ? "" : iconPrefix || "icon-"}${icon}`
                : "";
        },
        isActive,
    },
});
//# sourceMappingURL=SidebarGroup.js.map