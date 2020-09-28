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
import { DemoMenu } from './demo-menu.component';

import '@spectrum/sp-menu';
import '@spectrum/sp-menuitem';
import '@spectrum/sp-container';


export default function template(this: DemoMenu) {
  return html`
  <sp-container>
      <sp-rule medium label="Menu - Standard"></sp-rule>
      <sp-demo width="340">
<pre><sp-menu width="300" selectable>
  <sp-menuitem label="Canada"></sp-menuitem>
  <sp-menuitem label="Ghana" selected></sp-menuitem>
  <sp-menuitem label="Portugal"></sp-menuitem>
  <sp-menuitem divider></sp-menuitem>
  <sp-menuitem label="Favourite" icon="Star"></sp-menuitem>
  <sp-menuitem divider></sp-menuitem>
  <sp-menuitem label="United Arab Emirates" icon="AlertSmall" disabled></sp-menuitem>
</sp-menu>
</pre>
      </sp-demo>
      <sp-rule medium label="Menu - With header"></sp-rule>
      <sp-demo width="320">
        <pre>
<sp-menu width="300">
  <sp-menuheader title='Africa' width="290">
    <sp-menuitem label="Tunisia"></sp-menuitem>
    <sp-menuitem label="Ghana" selected></sp-menuitem>
    <sp-menuitem label="Algeria"></sp-menuitem>
    <sp-menuitem icon="ChevronDownSmall" label="More"></sp-menuitem>
  </sp-menuheader>
  <sp-menuitem divider></sp-menuitem>
  <sp-menuheader title='Europe' width="290">
    <sp-menuitem label="Italy"></sp-menuitem>
    <sp-menuitem label="France" selected></sp-menuitem>
    <sp-menuitem icon="ChevronDownSmall" label="More"></sp-menuitem>
  </sp-menuheader>
</sp-menu>
</pre>
      </sp-demo>
    </sp-container>
  `;
}
