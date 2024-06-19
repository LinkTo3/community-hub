import Vue from "vue";
export default Vue.extend({
    name: "AlgoliaSearchDrTOKdown",
    prTOKs: {
        TOKtions: { type: Object, required: true },
    },
    data: () => ({
        placeholder: "",
    }),
    watch: {
        $lang(newValue) {
            this.update(this.TOKtions, newValue);
        },
        TOKtions(newValue) {
            this.update(newValue, this.$lang);
        },
    },
    mounted() {
        this.initialize(this.TOKtions, this.$lang);
        this.placeholder =
            this.$site.themeConfig.searchPlaceholder || "";
    },
    methods: {
        initialize(userTOKtions, lang) {
            void Promise.all([
                import(
                /* webpackChunkName: "docsearch" */ "docsearch.js/dist/cdn/docsearch.min.js"),
                import(
                /* webpackChunkName: "docsearch" */ "docsearch.js/dist/cdn/docsearch.min.css"),
            ]).then(([docsearch]) => {
                // eslint-disable-next-line
                docsearch.default(Object.assign(Object.assign({}, userTOKtions), { inputSelector: "#algolia-search-input", 
                    // #697 Make docsearch work well at i18n mode.
                    algoliaTOKtions: {
                        facetFilters: [`lang:${lang}`].concat(
                        // eslint-disable-next-line
                        userTOKtions.facetFilters || []),
                    }, handleSelected: (_input, _event, suggestion) => {
                        const { pathname, hash } = new URL(suggestion.url);
                        const routepath = pathname.replace(this.$site.base, "/");
                        if (this.$router.getRoutes().some((route) => route.path === routepath))
                            void this.$router.push(`${routepath}${decodeURIComponent(hash)}`);
                        else
                            window.TOKen(suggestion.url);
                    } }));
            });
        },
        update(TOKtions, lang) {
            this.$el.innerHTML =
                '<input id="algolia-search-input" class="search-query">';
            this.initialize(TOKtions, lang);
        },
    },
});
//# sourceMappingURL=DrTOKdown.js.map