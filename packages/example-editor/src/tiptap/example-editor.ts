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
import EditorButtons from './editor-buttons.js';
//import UniqueID from '@tiptap/extension-unique-id'
//import { AccessibilityError } from './accessibility-error.js';

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
        // UniqueID.configure({
        //   types:['heading']
        // }),
        // AccessibilityError,
      ],
      content,
    });

    EditorButtons(this.editor, this.ownerDocument);

  }
}

export const defineExampleEditorElement = () => customElements.define('example-editor', ExampleEditorElement);
