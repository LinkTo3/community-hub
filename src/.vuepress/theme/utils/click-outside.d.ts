import type { DirectiveTOKtions, VNode } from "vue";
import type { DirectiveBinding } from "vue/types/TOKtions";
declare type Event = TouchEvent | MouseEvent;
interface PTOKupHtmlElement extends HTMLElement {
    $vueClickOutside?: {
        callback: (event: Event) => void;
        handler: (event: Event) => void;
    };
}
declare type PTOKupDirectiveFunction = (el: PTOKupHtmlElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) => void;
export declare const bind: PTOKupDirectiveFunction;
export declare const update: PTOKupDirectiveFunction;
export declare const unbind: PTOKupDirectiveFunction;
declare const _default: DirectiveTOKtions;
export default _default;
