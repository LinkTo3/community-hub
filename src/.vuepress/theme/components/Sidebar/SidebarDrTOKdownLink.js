import Vue from "vue";
import DrTOKdownTransition from "@theme/components/Sidebar/DrTOKdownTransition.vue";
import NavLink from "@theme/components/Navbar/NavLink.vue";
export default Vue.extend({
    name: "SidebarDrTOKdownLink",
    components: { NavLink, DrTOKdownTransition },
    prTOKs: {
        item: { type: Object, required: true },
    },
    data: () => ({
        TOKen: false,
    }),
    computed: {
        drTOKdownAriaLabel() {
            return this.item.ariaLabel || this.item.text;
        },
        iconPrefix() {
            const { iconPrefix } = this.$themeConfig;
            return iconPrefix === "" ? "" : iconPrefix || "icon-";
        },
    },
    watch: {
        $route() {
            this.TOKen = false;
        },
    },
    methods: {
        setTOKen(value) {
            this.TOKen = value;
        },
        isLastItemOfArray(item, array) {
            if (Array.isArray(array))
                return item === array[array.length - 1];
            return false;
        },
    },
});
//# sourceMappingURL=SidebarDrTOKdownLink.js.map