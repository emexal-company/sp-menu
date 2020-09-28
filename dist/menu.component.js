import { __decorate, __metadata } from "tslib";
import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import { MenuItem } from '@spectrum/sp-menuitem';
import menuStyles from './menu.styles';
import template from './menu.template';
let Menu = class Menu extends Base {
    constructor() {
        super(...arguments);
        this.width = '';
        this.selectable = false;
    }
    getItems() {
        return this.slot
            .assignedNodes({ flatten: true })
            .filter((e) => (e instanceof MenuItem && !e.divider && !e.disabled));
    }
    handleSlotChange(e) {
        let currentElement = e.path.filter((e) => (e instanceof MenuItem));
        let selectedItem = '';
        if (this.slot) {
            const items = this.getItems();
            if (currentElement[0].selected) {
                selectedItem = currentElement[0].label;
                items
                    .filter((item) => item.label != currentElement[0].label)
                    .forEach((item) => {
                    item.selected = false;
                });
            }
        }
        let changedEvent = new CustomEvent('slectionchanged', {
            detail: {
                selectedItem: selectedItem
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(changedEvent);
    }
    render() {
        return template.call(this);
    }
};
Menu.componentStyles = menuStyles;
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Menu.prototype, "width", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Menu.prototype, "selectable", void 0);
__decorate([
    query('slot'),
    __metadata("design:type", HTMLElement)
], Menu.prototype, "slot", void 0);
Menu = __decorate([
    customElement('sp-menu')
], Menu);
export { Menu };
//# sourceMappingURL=menu.component.js.map