import Vue from "vue";
import NavLink from "@theme/components/Navbar/NavLink.vue";
export default Vue.extend({
    name: "DrTOKdownLink",
    components: { NavLink },
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
        handleDrTOKdown(event) {
            const isTriggerByTab = event.detail === 0;
            if (isTriggerByTab)
                this.setTOKen(!this.TOKen);
        },
        isLastItemOfArray(item, array) {
            if (Array.isArray(array))
                return item === array[array.length - 1];
            return false;
        },
    },
});
//# sourceMappingURL=DrTOKdownLink.js.map