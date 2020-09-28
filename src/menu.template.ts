/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Menu } from './menu.component';
import { MenuItem } from './menuitem.component';


import '@spectrum/sp-menuitem';
import '@spectrum/sp-icon';

export default function template(this: Menu) {

    var classes = {
        'is-selectable': this.selectable,
    }

    return html`
    <ul class="spectrum-Menu ${classMap(classes)}" style="${styleMap({ width: this.width + 'px'})}" role="menu">
        <slot @click="${this.handleSlotChange}" style="${styleMap({ width: this.width + 'px'})}"></slot>
    </ul>
    `;
}
