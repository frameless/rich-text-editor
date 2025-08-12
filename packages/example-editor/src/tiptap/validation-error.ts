export interface ValidationError extends Error {
  id: string;
}

export class HeadingLevelValidError extends Error implements ValidationError {
  id = 'heading-level-valid';
  constructor() {
    super('Invalid heading level');
  }
}
export class HeadingEmptyError extends Error implements ValidationError {
  id = 'empty-heading';
  constructor() {
    super('Heading is empty');
  }
}
export class ParagraphEmptyError extends Error implements ValidationError {
  id = 'empty-paragraph';
  constructor() {
    super('Paragraph is empty');
  }
}
export class PageStartsWithHeadingOneError extends Error implements ValidationError {
  id = 'page-starts-with-heading-one';
  constructor() {
    super('Page must start with Heading 1');
  }
}
export class PageHasHeadingOneError extends Error implements ValidationError {
  id = 'page-has-heading-one';
  constructor() {
    super('Page must have Heading 1');
  }
}
export class NoUnderlineError extends Error implements ValidationError {
  id = 'no-underline';
  constructor() {
    super('Underline must not be used');
  }
}

export class StyleBoldInHeadingError extends Error implements ValidationError {
  id = 'style-bold-in-heading';
  constructor() {
    super('Must not use bold inside a heading');
  }
}
export class StyleItalicInHeadingError extends Error implements ValidationError {
  id = 'style-italic-in-heading';
  constructor() {
    super('Must not use italic inside a heading');
  }
}
export class StyleStrongInHeadingError extends Error implements ValidationError {
  id = 'style-strong-in-heading';
  constructor() {
    super('Must not use strong inside a heading');
  }
}
export class StyleEmphasisInHeadingError extends Error implements ValidationError {
  id = 'style-emphasis-in-heading';
  constructor() {
    super('Must not use emphasis inside a heading');
  }
}

export class PageHasMultipleHeadingOneError extends Error implements ValidationError {
  id = 'page-has-multiple-heading-one';
  constructor() {
    super('Must only have one Heading 1 per document');
  }
}

export class TableNeedsMultipleRowsError extends Error implements ValidationError {
  id = 'table-needs-multiple-rows';
  constructor() {
    super('Table must have more than one row');
  }
}

export class EmptyTableHeaderError extends Error implements ValidationError {
  id = 'empty-table-header';
  constructor() {
    super('Table must have a header that contains text');
  }
}
export class LinkNameError extends Error implements ValidationError {
  id = 'link-name';
  constructor() {
    super('Link must have meaningful link text');
  }
}
export class ImageMustHaveAltError extends Error implements ValidationError {
  id = 'image-must-have-alt';
  constructor() {
    super('Image must have meaningful alternative text');
  }
}

export class EmptyDefinitionTermError extends Error implements ValidationError {
  id = 'empty-definition-term';
  constructor() {
    super('Definition term must not be empty');
  }
}

export class EmptyDefinitionDetailsError extends Error implements ValidationError {
  id = 'empty-definition-details';
  constructor() {
    super('Definition value must not be empty');
  }
}
export class DefinitionListHasDefinitionTermError extends Error implements ValidationError {
  id = 'definition-list-has-definition-term';
  constructor() {
    super('Definition list must have a key');
  }
}

export class DefinitionListHasDefinitionValueError extends Error implements ValidationError {
  id = 'definition-list-has-definition-details';
  constructor() {
    super('Definition list must have a value');
  }
}

export class HeadingOrderError extends Error implements ValidationError {
  id = 'heading-order';
  constructor() {
    super('Heading order must be logical');
  }
}
