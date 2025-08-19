import { defineUtrechtParagraph } from './custom-element/utrecht-paragraph.js';
import { defineUtrechtUnorderedList } from './custom-element/utrecht-unordered-list.js';
import { defineUtrechtUnorderedListItem } from './custom-element/utrecht-unordered-list-item.js';
import { defineUtrechtOrderedList } from './custom-element/utrecht-ordered-list.js';
import { defineUtrechtOrderedListItem } from './custom-element/utrecht-ordered-list-item.js';
import { defineUtrechtHeading, UtrechtHeading } from './custom-element/utrecht-heading.js';
import { defineExampleEditorElement } from './tiptap/example-editor.js';
import { defineUtrechtLink } from './custom-element/utrecht-link.ts';
import { defineUtrechtSafeLink } from './custom-element/utrecht-safe-link.ts';
import { defineCustomElements } from '@utrecht/web-component-library-stencil/loader';
import type { ValidationEvent } from './tiptap/ValidationEvent.ts';
import '@utrecht/root-css/dist/index.css';
import '@utrecht/body-css/dist/index.css';
import '@utrecht/page-layout-css/dist/index.css';
import '@utrecht/page-body-css/dist/index.css';

defineExampleEditorElement();
defineUtrechtParagraph();
defineUtrechtHeading();
defineUtrechtUnorderedList();
defineUtrechtUnorderedListItem();
defineUtrechtOrderedList();
defineUtrechtOrderedListItem();
defineUtrechtLink();
defineUtrechtSafeLink();
defineCustomElements();

const editor = document.querySelector('example-editor');

document.addEventListener<any>('validationError', (evt: ValidationEvent) => {
  const result = document.getElementById('error-list');

  if (!result) {
    return;
  }
  while (result?.lastChild) {
    result.removeChild(result.lastChild);
  }
  evt.detail.errors.forEach((e) => {
    const messages = [
      {
        id: 'heading-level-valid',
        message: 'Gebruik een correct kopniveau: 1 tot en met 6',
        url: 'https://nldesignsystem.nl/richtlijnen/content/tekstopmaak/koppen/',
      },
      {
        id: 'empty-heading',
        message: 'Koppen moeten niet leeg zijn. Vul de kop in of verwijder de kop.',
        url: 'https://nldesignsystem.nl/wcag/2.4.6',
      },
      {
        id: 'empty-paragraph',
        message: "Alinea's moeten niet leeg zijn. Vul de kop in of verwijder de kop.",
        url: 'https://nldesignsystem.nl/wcag/1.3.1',
      },
      {
        id: 'page-starts-with-heading-one',
        message: 'Een Kop van niveau 1 moet het eerste zijn in elk document.',
        url: 'https://nldesignsystem.nl/wcag/1.3.1',
      },
      {
        id: 'page-has-heading-one',
        message: 'Elke pagina moet een Kop van niveau 1 hebben.',
        url: 'https://nldesignsystem.nl/richtlijnen/content/tekstopmaak/koppen/#kopniveaus',
      },
      {
        id: 'no-underline',
        message: 'Gebruik geen onderstreping, dat lijkt teveel op een link.',
        url: 'https://nldesignsystem.nl/richtlijnen/content/tekstopmaak/tekst-benadrukken#onderstrepen',
      },
      {
        id: 'style-bold-in-heading',
        message: 'Gebruik geen bold in een Kop, dat valt niet altijd voldoende op.',
        url: 'https://nldesignsystem.nl/richtlijnen/content/tekstopmaak/tekst-benadrukken',
      },
      {
        id: 'style-italic-in-heading',
        message: 'Gebruik geen italic in een Kop, dat valt niet altijd voldoende op.',
        url: 'https://nldesignsystem.nl/richtlijnen/content/tekstopmaak/tekst-benadrukken',
      },
      {
        id: 'style-strong-in-heading',
        message: 'Gebruik geen vette tekst in een Kop, dat valt niet altijd voldoende op.',
        url: 'https://nldesignsystem.nl/richtlijnen/content/tekstopmaak/tekst-benadrukken',
      },
      {
        id: 'style-emphasis-in-heading',
        message: 'Gebruik geen schuine in een Kop, dat valt niet altijd voldoende op.',
        url: 'https://nldesignsystem.nl/richtlijnen/content/tekstopmaak/tekst-benadrukken',
      },
      {
        id: 'page-has-multiple-heading-one',
        message: 'Gebruik Kop-niveau 1 alleen voor de eerste Kop, gebruik daarna niveau 2.',
        url: 'https://nldesignsystem.nl/wcag/1.3.1',
      },
      {
        id: 'table-needs-multiple-rows',
        message:
          'Een tabel met 1 tabelrij is niet logisch. Maak de tabel compleet, of gebruik geen tabel in deze situatie.',
        url: 'https://nldesignsystem.nl/wcag/1.3.1',
      },
      {
        id: 'empty-table-header',
        message: 'Vul een duidelijke kop in voor deze tabel.',
        url: 'https://nldesignsystem.nl/wcag/2.4.6',
      },
      {
        id: 'link-name',
        message: 'Gebruik een duidelijke tekst voor de link.',
        url: 'https://nldesignsystem.nl/wcag/2.4.4',
      },
      {
        id: 'image-must-have-alt',
        message:
          'Voeg een alt-tekst toe. Elke afbeelding moet een tekst-alternatief hebben, tenzij de afbeelding alleen decoratief is.',
        url: 'https://nldesignsystem.nl/wcag/1.1.1',
      },
      {
        id: 'empty-definition-term',
        message: 'Voeg een tekst toe voor de term.',
        url: 'https://nldesignsystem.nl/wcag/2.4.6',
      },
      {
        id: 'empty-definition-details',
        message: 'Voeg een tekst toe voor de beschrijving.',
        url: 'https://nldesignsystem.nl/wcag/2.4.6',
      },
      {
        id: 'definition-list-has-definition-term',
        message: 'Deze lijst moet tenminste 1 term hebben.',
        url: 'https://nldesignsystem.nl/wcag/1.3.1',
      },
      {
        id: 'definition-list-has-definition-details',
        message: 'Deze lijst moet tenminste 1 beschrijving hebben.',
        url: 'https://nldesignsystem.nl/wcag/1.3.1',
      },
      {
        id: 'heading-order',
        message: 'Elke Kop op de pagina moet een logisch kop-niveau hebben. Stel een correct kopniveau in.',
        url: 'https://nldesignsystem.nl/richtlijnen/content/tekstopmaak/koppen/#kopniveaus',
      },
    ];

    let message = e.message;
    const error = messages.find(({ id }) => id === e.id);

    if (error) {
      message = ``;
      if (error.url && e.elt) {
        if(!e.elt) return false;

        message += `<utrecht-paragraph>${error.message}</utrecht-button-group>`;
        message += `<utrecht-button-group><utrecht-link href="${error.url}" target="help">Lees meer bij NL Design System</utrecht-link></utrecht-button-group>`;

        const id = e.elt.attrs['id'];

        // GOTCHA!!!
        const element = document.querySelector(`[data-id='${id}']`);
      }
    }
    result.innerHTML += `<p><utrecht-alert type="error">${message}</utrecht-alert></p>`;
  });
});
