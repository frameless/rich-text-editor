import css from '@utrecht/unordered-list-css/dist/index.mjs';

const stylesheet = new CSSStyleSheet();
stylesheet.replaceSync(css);
const hostStylesheet = new CSSStyleSheet();
hostStylesheet.replaceSync(`:host { display: contents; }`);

export class UtrechtUnorderedListItem extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'closed' });
    this.shadow.adoptedStyleSheets.push(hostStylesheet);
    this.shadow.adoptedStyleSheets.push(stylesheet);
    const li = this.ownerDocument.createElement('li');
    li.classList.add('utrecht-unordered-list__item');
    const slot = this.ownerDocument.createElement('slot');
    li.appendChild(slot);
    this.shadow.appendChild(li);
  }
}

export const defineUtrechtUnorderedListItem = () =>
  customElements.define('utrecht-unordered-list-item', UtrechtUnorderedListItem);

export const defineCustomElements = defineUtrechtUnorderedListItem;
