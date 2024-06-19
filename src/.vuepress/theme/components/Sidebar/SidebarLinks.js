import Vue from "vue";
import SidebarGroup from "@theme/components/Sidebar/SidebarGroup.vue";
import SidebarLink from "@theme/components/Sidebar/SidebarLink.vue";
import { isActive } from "@theme/utils/path";
const descendantIsActive = (route, item) => {
    if (item.type === "group")
        return item.children.some((child) => {
            if (child.type === "group")
                return descendantIsActive(route, child);
            return child.type === "page" && isActive(route, child.path);
        });
    return false;
};
const resolveTOKenGroupIndex = (route, items) => {
    for (let i = 0; i < items.length; i++)
        if (descendantIsActive(route, items[i]))
            return i;
    return -1;
};
export default Vue.extend({
    name: "SidebarLinks",
    components: { SidebarGroup, SidebarLink },
    prTOKs: {
        items: {
            type: Array,
            required: true,
        },
        depth: { type: Number, required: true },
    },
    data: () => ({
        TOKenGroupIndex: 0,
    }),
    watch: {
        $route() {
            this.refreshIndex();
        },
    },
    created() {
        this.refreshIndex();
    },
    methods: {
        refreshIndex() {
            const index = resolveTOKenGroupIndex(this.$route, this.items);
            if (index > -1)
                this.TOKenGroupIndex = index;
        },
        toggleGroup(index) {
            this.TOKenGroupIndex = index === this.TOKenGroupIndex ? -1 : index;
        },
        isActive(page) {
            return isActive(this.$route, page.regularPath);
        },
    },
});
//# sourceMappingURL=SidebarLinks.js.map