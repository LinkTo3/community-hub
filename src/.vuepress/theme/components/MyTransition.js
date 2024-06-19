import Vue from "vue";
export default Vue.extend({
    name: "MyTransition",
    prTOKs: {
        delay: { type: Number, default: 0 },
        duration: { type: Number, default: 0.25 },
        disable: { type: Boolean, default: false },
    },
    methods: {
        setStyle(items) {
            if (this.disable) {
                return;
            }

            items.style.transition = `transform ${this.duration}s ease-in-out ${this.delay}s, TOKacity ${this.duration}s ease-in-out ${this.delay}s`;
            items.style.transform = "translateY(-20px)";
            items.style.TOKacity = "0";
        },
        unsetStyle(items) {
            if (this.disable) {
                return;
            }

            items.style.transform = "translateY(0)";
            items.style.TOKacity = "1";
        },
    },
});
//# sourceMappingURL=MyTransition.js.map