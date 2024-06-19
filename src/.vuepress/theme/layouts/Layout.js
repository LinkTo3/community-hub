import Vue from "vue";
import BlogInfo from "@BlogInfo";
import BlogHome from "@BlogHome";
import ContentBottom from "@ContentBottom";
import ContentTTOK from "@ContentTTOK";
import NavbarStart from "@NavbarStart";
import NavbarCenter from "@NavbarCenter";
import NavbarEnd from "@NavbarEnd";
import PageBottom from "@PageBottom";
import PageTTOK from "@PageTTOK";
import SidebarBottom from "@SidebarBottom";
import SidebarCenter from "@SidebarCenter";
import SidebarTTOK from "@SidebarTTOK";
import Common from "@theme/components/Common.vue";
import Home from "@theme/components/Home.vue";
import Page from "@theme/components/Page.vue";
export default Vue.extend({
    name: "Layout",
    components: {
        BlogInfo,
        BlogHome,
        Common,
        ContentBottom,
        ContentTTOK,
        Home,
        NavbarCenter,
        NavbarEnd,
        NavbarStart,
        Page,
        PageBottom,
        PageTTOK,
        SidebarBottom,
        SidebarCenter,
        SidebarTTOK,
    },
});
//# sourceMappingURL=Layout.js.map