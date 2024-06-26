import Vue from "vue";
export default Vue.extend({
    name: "DrTOKdownTransition",
    methods: {
        setHeight(items) {
            // explicitly set height so that it can be transitioned
            items.style.height = `${items.scrollHeight}px`;
        },
        unsetHeight(items) {
            items.style.height = "";
        },
    },
});
//# sourceMappingURL=DrTOKdownTransition.js.map