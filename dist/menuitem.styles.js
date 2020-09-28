/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

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
import { css } from 'lit-element';
export default css `.spectrum-Menu{--spectrum-popover-padding-y: var(--spectrum-global-dimension-size-50);--spectrum-icon-checkmark-medium-width: undefined;--spectrum-selectlist-option-icon-padding-x: var(--spectrum-global-dimension-size-150);--spectrum-selectlist-option-padding: var(--spectrum-global-dimension-static-size-150);--spectrum-popover-border-size: var(--spectrum-alias-border-size-thin);--spectrum-selectlist-border-size-key-focus: var(--spectrum-global-dimension-static-size-25);--spectrum-selectlist-option-height: undefined;--spectrum-selectlist-option-text-size: var(--spectrum-alias-font-size-default);--spectrum-selectlist-option-text-font-weight: var(--spectrum-global-font-weight-regular);--spectrum-selectlist-thumbnail-image-padding-x: var(--spectrum-global-dimension-size-100);--spectrum-alias-workflow-icon-size: var(--spectrum-global-dimension-size-225);--spectrum-selectlist-divider-size: var(--spectrum-alias-border-size-thick);--spectrum-selectlist-divider-padding: 3px;--spectrum-alias-line-height-medium: var(--spectrum-global-dimension-size-250);--spectrum-selectlist-background-color: var(--spectrum-alias-background-color-transparent);--spectrum-selectlist-option-background-color: var(--spectrum-alias-background-color-transparent);--spectrum-selectlist-option-text-color: var(--spectrum-alias-text-color);--spectrum-selectlist-option-background-color-key-focus: var(--spectrum-alias-background-color-hover-overlay);--spectrum-selectlist-option-text-color-key-focus: var(--spectrum-alias-text-color);--spectrum-selectlist-option-focus-indicator-color: var(--spectrum-alias-border-color-focus);--spectrum-selectlist-option-background-color-hover: var(--spectrum-alias-background-color-hover-overlay);--spectrum-selectlist-option-text-color-hover: var(--spectrum-alias-text-color);--spectrum-selectlist-option-text-color-selected: var(--spectrum-alias-text-color);--spectrum-selectlist-option-icon-color-selected: var(--spectrum-alias-icon-color-selected);--spectrum-selectlist-option-background-color-down: var(--spectrum-alias-background-color-hover-overlay);--spectrum-selectlist-option-background-color-disabled: var(--spectrum-alias-background-color-transparent);--spectrum-selectlist-option-text-color-disabled: var(--spectrum-alias-text-color-disabled);--spectrum-heading-subtitle3-text-color: var(--spectrum-global-color-gray-700);--spectrum-selectlist-divider-color: var(--spectrum-alias-border-color-extralight)}.spectrum-Menu.is-selectable .spectrum-Menu-item{padding-right:calc(var(--spectrum-global-dimension-size-100) + var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-selectlist-option-icon-padding-x, var(--spectrum-global-dimension-size-150)))}.spectrum-Menu.is-selectable .spectrum-Menu-item.is-selected{padding-right:calc(var(--spectrum-selectlist-option-padding, var(--spectrum-global-dimension-static-size-150)) - var(--spectrum-popover-border-size, var(--spectrum-alias-border-size-thin)))}.spectrum-Menu-item{cursor:pointer;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-85) var(--spectrum-selectlist-option-padding, var(--spectrum-global-dimension-static-size-150)) var(--spectrum-global-dimension-size-85) calc(var(--spectrum-selectlist-option-padding, var(--spectrum-global-dimension-static-size-150)) - var(--spectrum-selectlist-border-size-key-focus, var(--spectrum-global-dimension-static-size-25)));margin:0;border-left:var(--spectrum-selectlist-border-size-key-focus, var(--spectrum-global-dimension-static-size-25)) solid transparent;min-height:var(--spectrum-selectlist-option-height);font-size:var(--spectrum-selectlist-option-text-size, var(--spectrum-alias-font-size-default));font-weight:var(--spectrum-selectlist-option-text-font-weight, var(--spectrum-global-font-weight-regular));font-style:normal;text-decoration:none}.spectrum-Menu-item:focus{outline:none}.spectrum-Menu-item.is-selected{padding-right:calc(var(--spectrum-selectlist-option-padding, var(--spectrum-global-dimension-static-size-150)) - var(--spectrum-popover-border-size, var(--spectrum-alias-border-size-thin)))}.spectrum-Menu-item.is-selected .spectrum-Menu-checkmark{display:block}.spectrum-Menu-item .spectrum-Icon,.spectrum-Menu-item .spectrum-Menu-itemIcon{-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:flex-start}.spectrum-Menu-item .spectrum-Icon+.spectrum-Menu-itemLabel,.spectrum-Menu-item .spectrum-Menu-itemIcon+.spectrum-Menu-itemLabel{margin-left:var(--spectrum-selectlist-thumbnail-image-padding-x, var(--spectrum-global-dimension-size-100));width:calc(100% - var(--spectrum-icon-checkmark-medium-width) - var(--spectrum-selectlist-option-icon-padding-x, var(--spectrum-global-dimension-size-150)) - var(--spectrum-selectlist-thumbnail-image-padding-x, var(--spectrum-global-dimension-size-100)) - var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)))}.spectrum-Menu-itemLabel{-ms-flex:1 1 auto;flex:1 1 auto;line-height:1.3;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow-wrap:break-word;width:calc(100% - var(--spectrum-icon-checkmark-medium-width) - var(--spectrum-selectlist-option-icon-padding-x, var(--spectrum-global-dimension-size-150)))}.spectrum-Menu-itemLabel--wrapping{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.spectrum-Menu-item{background-color:var(--spectrum-selectlist-option-background-color, var(--spectrum-alias-background-color-transparent));color:var(--spectrum-selectlist-option-text-color, var(--spectrum-alias-text-color))}.spectrum-Menu-item.focus-ring,.spectrum-Menu-item.is-focused{background-color:var(--spectrum-selectlist-option-background-color-key-focus, var(--spectrum-alias-background-color-hover-overlay));color:var(--spectrum-selectlist-option-text-color-key-focus, var(--spectrum-alias-text-color));border-left-color:var(--spectrum-selectlist-option-focus-indicator-color, var(--spectrum-alias-border-color-focus))}.spectrum-Menu-item:hover,.spectrum-Menu-item:focus,.spectrum-Menu-item.is-highlighted,.spectrum-Menu-item.is-open{background-color:var(--spectrum-selectlist-option-background-color-hover, var(--spectrum-alias-background-color-hover-overlay));color:var(--spectrum-selectlist-option-text-color-hover, var(--spectrum-alias-text-color))}.spectrum-Menu-item.is-selected{color:var(--spectrum-selectlist-option-text-color-selected, var(--spectrum-alias-text-color))}.spectrum-Menu-item.is-selected .spectrum-Menu-checkmark{color:var(--spectrum-selectlist-option-icon-color-selected, var(--spectrum-alias-icon-color-selected))}.spectrum-Menu-item .is-active,.spectrum-Menu-item:active{background-color:var(--spectrum-selectlist-option-background-color-down, var(--spectrum-alias-background-color-hover-overlay))}.spectrum-Menu-item.is-disabled{background-color:var(--spectrum-selectlist-option-background-color-disabled, var(--spectrum-alias-background-color-transparent));background-image:none;color:var(--spectrum-selectlist-option-text-color-disabled, var(--spectrum-alias-text-color-disabled));cursor:default}.spectrum-Menu-divider{box-sizing:content-box;overflow:visible;height:var(--spectrum-selectlist-divider-size, var(--spectrum-alias-border-size-thick));margin:calc(var(--spectrum-selectlist-divider-padding, 3px) / 2) var(--spectrum-selectlist-option-padding, var(--spectrum-global-dimension-static-size-150));padding:0 0;border:none}.spectrum-Menu-divider{background-color:var(--spectrum-selectlist-divider-color, var(--spectrum-alias-border-color-extralight))}.spectrum-Menu-checkmark{transform:scale(1);opacity:1}.spectrum-Menu-checkmark{display:none;-ms-flex-item-align:start;align-self:flex-start}.spectrum-Menu-checkmark,.spectrum-Menu-chevron{-ms-flex-positive:0;flex-grow:0;margin-left:var(--spectrum-selectlist-option-icon-padding-x, var(--spectrum-global-dimension-size-150));margin-top:var(--spectrum-global-dimension-size-50)}`;
//# sourceMappingURL=menuitem.styles.js.map