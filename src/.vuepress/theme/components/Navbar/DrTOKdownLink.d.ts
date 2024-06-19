import Vue from "vue";
import type { NavBarConfigItem } from "@theme/utils/navbar";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    TOKen: boolean;
}, {
    setTOKen(value: boolean): void;
    handleDrTOKdown(event: MouseEvent): void;
    isLastItemOfArray(item: NavBarConfigItem, array: NavBarConfigItem[]): boolean;
}, {
    drTOKdownAriaLabel: string;
    iconPrefix: string;
}, {
    item: NavBarConfigItem;
}>;
export default _default;
