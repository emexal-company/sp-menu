import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import '@spectrum/sp-menuitem';
import '@spectrum/sp-icon';
export default function template() {
    var classes = {
        'is-selectable': this.selectable,
    };
    return html `
    <ul class="spectrum-Menu ${classMap(classes)}" style="${styleMap({ width: this.width + 'px' })}" role="menu">
        <slot @click="${this.handleSlotChange}" style="${styleMap({ width: this.width + 'px' })}"></slot>
    </ul>
    `;
}
//# sourceMappingURL=menu.template.js.map