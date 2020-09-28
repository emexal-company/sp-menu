import { Base } from '@spectrum/sp-base';
import { MenuItem } from '@spectrum/sp-menuitem';
export declare class Menu extends Base {
    static componentStyles: import("lit-element").CSSResult;
    width: string;
    selectable: boolean;
    private slot;
    protected getItems(): MenuItem[];
    protected handleSlotChange(e: any): void;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-menu': Menu;
    }
}
