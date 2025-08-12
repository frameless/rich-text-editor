import { Editor } from '@tiptap/core';
import { Bold } from './bold.js';
import { DataListItem } from './data-list-item.js';
import { DataListKey } from './data-list-key.js';
import { DataListValue } from './data-list-value.js';
import { DataList } from './data-list.js';
import { Document } from './document.js';
import { Emphasis } from './emphasis.js';
import { Heading } from './heading.js';
import { Image } from './image.js';
import { Italic } from './italic.js';
import { Link } from './link.js';
import { OrderedListItem } from './ordered-list-item.js';
import { OrderedList } from './ordered-list.js';
import { Paragraph } from './paragraph.js';
import { Strong } from './strong.js';
import { TableCaption } from './table-caption.js';
import { TableCell } from './table-cell.js';
import { TableHeaderCell } from './table-header-cell.js';
import { TableRow } from './table-row.js';
import { Table } from './table.js';
import { Text } from './text.js';
import { Underline } from './underline.js';
import { UnorderedListItem } from './unordered-list-item.js';
import { UnorderedList } from './unordered-list.js';
import { Validation } from './validation.js';

class ExampleEditorElement extends HTMLElement {
  editor: Editor;
  constructor() {
    super();
    const defaultContent = '<utrecht-paragraph></utrecht-paragraph>';
    const template = this.querySelector('template');
    const content = template ? template.innerHTML : defaultContent;

    this.editor = new Editor({
      element: this,
      extensions: [
        Bold,
        DataList,
        DataListItem,
        DataListKey,
        DataListValue,
        Document,
        Emphasis,
        Heading,
        Italic,
        Link,
        OrderedList,
        OrderedListItem,
        Image,
        Paragraph,
        Strong,
        Text,
        Table,
        TableCaption,
        TableHeaderCell,
        TableCell,
        TableRow,
        Underline,
        UnorderedList,
        UnorderedListItem,
        Validation,
      ],
      content,
    });

    // CHROME
    const container = document.getElementById('editor-chrome');
    if (!container) return;

    // STRONG
    const strong = this.ownerDocument.createElement('button');
    strong.innerHTML = '<strong>Vet</strong>';
    strong.onclick = () => {
      this.editor.chain().focus().toggleStrong().run();
    };
    container.appendChild(strong);

    // EMPHASIS
    const emphasis = this.ownerDocument.createElement('button');
    emphasis.innerHTML = '<em>Schuin</em>';
    emphasis.onclick = () => {
      this.editor.chain().focus().toggleEmphasis().run();
    };
    container.appendChild(emphasis);

    // PARAGRAPH
    const paragraph = this.ownerDocument.createElement('button');
    paragraph.innerHTML = 'Paragraaf';
    paragraph.onclick = () => {
      this.editor.chain().focus().setParagraph().run();
    };
    container.appendChild(paragraph);

    // HEADING
    const heading = this.ownerDocument.createElement('select');
    for (let i = 0; i < 7; i++) {
      let option = this.ownerDocument.createElement('option');
      if (i === 0) {
        option.innerHTML = 'Kopniveau';
      } else {
        option.innerHTML = 'H' + i;
      }
      heading.appendChild(option);
    }
    heading.onchange = (e) => {
      let elt = e.target as HTMLSelectElement;
      if (elt) this.editor.chain().focus().toggleHeading({ level: elt.selectedIndex }).run();
    };
    container.appendChild(heading);
  }
}

export const defineExampleEditorElement = () => customElements.define('example-editor', ExampleEditorElement);
