import { Editor } from "@tiptap/core";

export default function EditorButtons(editor:Editor, doc:Document) {

  // CHROME
  const container = document.getElementById('editor-toolbar');
  if (!container) return;

  // STRONG
  const strong = doc.createElement('utrecht-button');
  strong.innerHTML = '<strong>Vet</strong>';
  strong.onclick = () => {
    editor.chain().focus().toggleStrong().run();
  };
  container.appendChild(strong);

  // EMPHASIS
  const emphasis = doc.createElement('utrecht-button');
  emphasis.innerHTML = '<em>Schuin</em>';
  emphasis.onclick = () => {
    editor.chain().focus().toggleEmphasis().run();
  };
  container.appendChild(emphasis);

  // PARAGRAPH
  const paragraph = doc.createElement('utrecht-button');
  paragraph.innerHTML = 'Paragraaf';
  paragraph.onclick = () => {
    editor.chain().focus().setParagraph().run();
  };
  container.appendChild(paragraph);

  // HEADING
  const heading = doc.createElement('select');
  for (let i = 0; i < 7; i++) {
    let option = doc.createElement('option');
    if (i === 0) {
      option.innerHTML = 'Kop';
    } else {
      option.innerHTML = 'H' + i;
    }
    heading.appendChild(option);
  }

  // SHOW ONLY ALLOWED LEVELS AT CURRENT POSITION
  heading.onfocus = (e) => {
    const state = editor.view.state;
    const from = state.selection.from;
    const pos = state.doc.resolve(from);
    const current = pos.node();// current node
    // const start = new NodePos(pos, editor); // DIT WERKT NIET?????

    let headings:any = [];

    editor.view.state.doc.nodesBetween(0, from, (node) => {
      if(node.type['name'] === 'heading' && node !== current) headings.push(node);
    })

    let max = 1;

    if(headings.length) max = headings[headings.length - 1].attrs.level + 1; // STARTING LEVEL IS LAST HEADING BEFORE THIS

    for(let i = 1; i < heading.options.length; i++){
      if(i <= max) heading.options[i].disabled = false;
      else heading.options[i].disabled = true;
    }

    heading.selectedIndex = current.attrs['level'] ? current.attrs['level'] : 0;

  }

  heading.onchange = (e) => {
    editor.chain().focus().setHeading({ level: heading.selectedIndex }).run();
  };

  container.appendChild(heading);
}
