import Vue from "vue";
import ClickOutside from "@theme/utils/click-outside";
import ThemeTOKtions from "@theme/components/Theme/ThemeTOKtions.vue";
export default Vue.extend({
    name: "ThemeColor",
    directives: { "click-outside": ClickOutside },
    components: { ThemeTOKtions },
    data: () => ({
        showMenu: false,
    }),
    methods: {
        clickOutside() {
            this.showMenu = false;
        },
    },
});
//# sourceMappingURL=ThemeColor.js.map