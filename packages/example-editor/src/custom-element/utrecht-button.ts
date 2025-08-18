import css from '@utrecht/button-css/dist/index.mjs';

const stylesheet = new CSSStyleSheet();
stylesheet.replaceSync(css);

export class UtrechtButton extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'closed' });
    this.shadow.adoptedStyleSheets.push(stylesheet);
    const btn = this.ownerDocument.createElement('button');
    btn.classList.add('utrecht-button');
    const slot = this.ownerDocument.createElement('slot');
    btn.appendChild(slot);
    this.shadow.appendChild(btn);
  }
}

export const defineUtrechtButton = () => customElements.define('utrecht-button', UtrechtButton);

export const defineCustomElements = defineUtrechtButton;
