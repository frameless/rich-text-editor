import { Editor, NodePos } from "@tiptap/core";

export default function EditorButtons(editor:Editor, root:Document) {
  console.log(editor, root);

  // CHROME
  const container = document.getElementById('editor-toolbar');
  if (!container) return;

  // STRONG
  const strong = root.createElement('button');
  strong.innerHTML = '<strong>Vet</strong>';
  strong.onclick = () => {
    editor.chain().focus().toggleStrong().run();
  };
  container.appendChild(strong);

  // EMPHASIS
  const emphasis = root.createElement('button');
  emphasis.innerHTML = '<em>Schuin</em>';
  emphasis.onclick = () => {
    editor.chain().focus().toggleEmphasis().run();
  };
  container.appendChild(emphasis);

  // PARAGRAPH
  const paragraph = root.createElement('button');
  paragraph.innerHTML = 'Paragraaf';
  paragraph.onclick = () => {
    editor.chain().focus().setParagraph().run();
  };
  container.appendChild(paragraph);

  // HEADING
  const heading = root.createElement('select');
  for (let i = 0; i < 7; i++) {
    let option = root.createElement('option');
    if (i === 0) {
      option.innerHTML = 'Kop';
    } else {
      option.innerHTML = 'H' + i;
    }
    heading.appendChild(option);
  }

  // SHOW ONLY ALLOWED LEVELS AT CURRENT POSITION
  heading.onpointerenter = (e) => {
    const state = editor.view.state;
    const from = state.selection.from;
    const pos = state.doc.resolve(from);
    const current = pos.node();// current node
    // const start = new NodePos(pos, editor); // DIT WERKT NIET?????

    let headings:any = [];

    editor.view.state.doc.nodesBetween(0, from, (node) => {
      if(node.type['name'] === 'heading' && node !== current) headings.push(node);
    })

    if(headings.length) {
      const max = headings[headings.length - 1].attrs.level + 1; // STARTING LEVEL IS LAST HEADING BEFORE THIS
      for(let i = 1; i < heading.options.length; i++){
        if(i <= max) heading.options[i].disabled = false;
        else heading.options[i].disabled = true;
      }
    } else {
      for(let i = 0; i < heading.options.length; i++){
        heading.options[i].disabled = false;
      }
    }

  }

  heading.onchange = (e) => {
    let elt = e.target as HTMLSelectElement;
    if (elt) editor.chain().focus().toggleHeading({ level: elt.selectedIndex }).run();
  };
  container.appendChild(heading);
}
