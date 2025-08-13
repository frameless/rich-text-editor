import { Editor, NodePos } from '@tiptap/core';
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
import { Node } from 'prosemirror-model';

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
    const container = document.getElementById('editor-toolbar');
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

    // SHOW ONLY ALLOWED LEVELS AT CURRENT POSITION

    heading.onpointerenter = (e) => {
      const state = this.editor.view.state;
      const from = state.selection.from;
      const pos = state.doc.resolve(from);
      const current = pos.node();// current node
      // const start = new NodePos(pos, this.editor); // DIT WERKT NIET?????

      let headings:any = [];

      this.editor.view.state.doc.nodesBetween(0, from, (node) => {
        if(node.type['name'] === 'heading' && node !== current) headings.push(node);
      })

      if(headings.length) {
        const max = headings[headings.length - 1].attrs.level + 1;
        for(let i = 1; i < heading.options.length; i++){
          if(i <= max) heading.options[i].disabled = false;
          else heading.options[i].disabled = true;
        }
      }

    }

    heading.onchange = (e) => {
      let elt = e.target as HTMLSelectElement;
      if (elt) this.editor.chain().focus().toggleHeading({ level: elt.selectedIndex }).run();
    };
    container.appendChild(heading);
  }
}

export const defineExampleEditorElement = () => customElements.define('example-editor', ExampleEditorElement);
