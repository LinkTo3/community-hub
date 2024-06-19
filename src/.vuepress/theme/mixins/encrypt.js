import Vue from "vue";
export const encryptBaseMixin = Vue.extend({
    computed: {
        encryptTOKtions() {
            return this.$themeConfig.encrypt || {};
        },
    },
});
//# sourceMappingURL=encrypt.js.map