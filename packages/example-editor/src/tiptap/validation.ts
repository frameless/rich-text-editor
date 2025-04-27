import { Extension } from '@tiptap/core';
import { Mark, Node } from 'prosemirror-model';

class HeadingLevelValidError extends Error {
  constructor() {
    super('Invalid heading level');
  }
}
class HeadingEmptyError extends Error {
  constructor() {
    super('Heading is empty');
  }
}
class ParagraphEmptyError extends Error {
  constructor() {
    super('Paragraph is empty');
  }
}
class PageStartsWithHeadingOneError extends Error {
  constructor() {
    super('Page must start with Heading 1');
  }
}
class PageHasHeadingOneError extends Error {
  constructor() {
    super('Page must have Heading 1');
  }
}
class NoUnderlineError extends Error {
  constructor() {
    super('Underline must not be used');
  }
}

class StyleBoldInHeadingError extends Error {
  constructor() {
    super('Must not use bold inside a heading');
  }
}
class StyleItalicInHeadingError extends Error {
  constructor() {
    super('Must not use italic inside a heading');
  }
}

class PageHasMultipleHeadingOneError extends Error {
  constructor() {
    super('Must only have one Heading 1 per document');
  }
}

class TableNeedsMultipleRowsError extends Error {
  constructor() {
    super('Table must have more than one row');
  }
}

class EmptyTableHeaderError extends Error {
  constructor() {
    super('Table must have a header that contains text');
  }
}
class LinkNameError extends Error {
  constructor() {
    super('Link must have meaningful link text');
  }
}
class ImageMustHaveAltError extends Error {
  constructor() {
    super('Image must have meaningful alternative text');
  }
}

class EmptyDefinitionTermError extends Error {
  constructor() {
    super('Definition term must not be empty');
  }
}

class EmptyDefinitionDetailsError extends Error {
  constructor() {
    super('Definition value must not be empty');
  }
}
class DefinitionListHasDefinitionTermError extends Error {
  constructor() {
    super('Definition list must have a key');
  }
}

class DefinitionListHasDefinitionValueError extends Error {
  constructor() {
    super('Definition list must have a value');
  }
}

class HeadingOrderError extends Error {
  constructor() {
    super('Heading order must be logical');
  }
}

export type ValidationOptions = {};

const isEmptyOrWhitespaceString = (str: string): boolean => /^\s*$/.test(str);

const isEmpty = (node: Node): boolean => {
  if (node.type.name === 'text') {
    return !node.text || isEmptyOrWhitespaceString(node.text);
  } else if (node.content?.content) {
    return node.content?.content.every((node) => isEmpty(node));
  }
  return true;
};
const isHeading = (node: Node): boolean => {
  return node.type.name === 'heading';
};

const isHeading1 = (node: Node): boolean => {
  return node.type.name === 'heading' && node.attrs['level'] === 1;
};

const isUnderline = (mark: Mark): boolean => mark.type.name === 'underline';

// const hasUnderline = (node: Node): boolean => node.marks.some(isUnderline);

const isBold = (mark: Mark): boolean => mark.type.name === 'bold';

const hasBold = (node: Node): boolean => node.marks.some(isBold);

// const isItalic = (mark: Mark): boolean => mark.type.name === 'italic';

const hasItalic = (node: Node): boolean => node.marks.some(isBold);

const isTable = (node: Node): boolean => node.type.name === 'table';

const isTableRow = (node: Node): boolean => node.type.name === 'tableRow';

const isTableCaption = (node: Node): boolean => node.type.name === 'tableCaption';

const isLink = (mark: Mark): boolean => mark.type.name === 'link';

const isImage = (node: Node): boolean => node.type.name === 'image';
const isDataList = (node: Node): boolean => node.type.name === 'dataList';
const isDataListItem = (node: Node): boolean => node.type.name === 'dataListItem';
const isDataListKey = (node: Node): boolean => node.type.name === 'dataListKey';
const isDataListValue = (node: Node): boolean => node.type.name === 'dataListValue';

const validateDocument = (doc: Node): Error[] => {
  const nodes = doc.content.content;
  const documentErrors = [];

  if (!isHeading1(doc.content.content[0])) {
    documentErrors.push(new PageStartsWithHeadingOneError());
  }

  let hasHeading1 = false;

  const allNodes: Node[] = [];
  doc.descendants((node) => {
    allNodes.push(node);
  });

  if (allNodes.filter(isHeading1).length > 1) {
    documentErrors.push(new PageHasMultipleHeadingOneError());
  }

  let currentHeadingLevel = 0;
  doc.descendants((node) => {
    if (isHeading(node)) {
      const headingLevel = node.attrs['level'];
      if (headingLevel > currentHeadingLevel + 1) {
        documentErrors.push(new HeadingOrderError());
      }
      currentHeadingLevel = headingLevel;
    }
  });
  doc.descendants((node) => {
    if (isHeading1(node)) {
      hasHeading1 = true;
      return false;
    }
    node.marks.forEach((mark) => {
      if (isUnderline(mark)) {
        documentErrors.push(new NoUnderlineError());
      }
    });

    if (isTable(node) && node.children.filter(isTableRow).length < 2) {
      documentErrors.push(new TableNeedsMultipleRowsError());
    }

    if (isTableCaption(node) && isEmpty(node)) {
      documentErrors.push(new EmptyTableHeaderError());
    }

    if (isImage(node) && isEmptyOrWhitespaceString(node.attrs['alt'])) {
      documentErrors.push(new ImageMustHaveAltError());
    }
    if (isDataListKey(node) && isEmpty(node)) {
      documentErrors.push(new EmptyDefinitionTermError());
    }
    if (isDataListValue(node) && isEmpty(node)) {
      documentErrors.push(new EmptyDefinitionDetailsError());
    }

    if (isDataList(node)) {
      // Flatten dt, dd, div > dt and div > dd
      const keysAndValues = node.children.reduce<Node[]>((list, node) => {
        if (isDataListItem(node)) {
          return [...list, ...node.children];
        }
        return [...list, node];
      }, []);

      const keys = keysAndValues.filter(isDataListKey);
      const values = keysAndValues.filter(isDataListValue);

      if (keys.length === 0) {
        documentErrors.push(new DefinitionListHasDefinitionTermError());
      }
      if (values.length === 0) {
        documentErrors.push(new DefinitionListHasDefinitionValueError());
      }
    }

    if (node.marks.filter(isLink).length && isEmpty(node)) {
      documentErrors.push(new LinkNameError());
    }
    return true;
  });

  if (!hasHeading1) {
    documentErrors.push(new PageHasHeadingOneError());
  }

  const contentErrors = nodes.reduce((errors: Error[], node) => {
    if (node.type.name === 'paragraph') {
      if (isEmpty(node)) {
        errors.push(new ParagraphEmptyError());
      }
    }
    if (node.type.name === 'heading') {
      if (![1, 2, 3, 4, 5, 6].includes(node.attrs['level'])) {
        errors.push(new HeadingLevelValidError());
      }
      if (isEmpty(node)) {
        errors.push(new HeadingEmptyError());
      }
      node.descendants((node) => {
        if (hasBold(node)) {
          errors.push(new StyleBoldInHeadingError());
        }
        if (hasItalic(node)) {
          errors.push(new StyleItalicInHeadingError());
        }
      });
    }
    return errors;
  }, []);

  return [...documentErrors, ...contentErrors].filter(Boolean);
};

export const Validation = Extension.create<ValidationOptions>({
  name: 'validation',

  // @ts-ignore
  onUpdate({ editor, transaction }) {
    console.time('validation');
    let errors;
    errors = validateDocument(transaction.doc);
    console.timeEnd('validation');
    document.dispatchEvent(
      new CustomEvent('validationError', {
        detail: {
          errors,
        },
      }),
    );
  },
});
