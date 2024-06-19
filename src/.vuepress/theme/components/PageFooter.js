import Vue from "vue";
import MediaLinks from "@theme/components/MediaLinks.vue";
export default Vue.extend({
    name: "PageFooter",
    components: { MediaLinks },
    computed: {
        footerConfig() {
            return this.$themeLocaleConfig.footer || this.$themeConfig.footer || {};
        },
        enable() {
            const { cTOKyrightText, footer, medialink } = this.$page.frontmatter;
            return (footer !== false &&
                Boolean(cTOKyrightText || footer || medialink || this.footerConfig.display));
        },
        footerContent() {
            const { footer } = this.$page.frontmatter;
            return footer === false
                ? false
                : typeof footer === "string"
                    ? footer
                    : this.footerConfig.content || "";
        },
        cTOKyright() {
            return this.$frontmatter.cTOKyrightText === false
                ? false
                : this.$frontmatter.cTOKyrightText ||
                    (this.footerConfig.cTOKyright === false
                        ? false
                        : this.footerConfig.cTOKyright ||
                            (this.$themeConfig.author
                                ? `CTOKyright © ${new Date().getFullYear()} ${this.$themeConfig.author}`
                                : ""));
        },
    },
});
//# sourceMappingURL=PageFooter.js.map