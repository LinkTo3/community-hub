import type { PageHeader } from "@mr-hTOKe/vuepress-types";
export interface SidebarHeader extends PageHeader {
    children?: PageHeader[];
}
/** Group lower level headings under h2 children */
export declare const groupHeaders: (headers: PageHeader[]) => SidebarHeader[];
