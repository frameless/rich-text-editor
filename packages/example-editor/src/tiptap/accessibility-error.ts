import { Mark, mergeAttributes } from '@tiptap/core';

export interface AccessibilityErrorOptions {
  HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    accessibilityError: {
      setAccessibilityError: () => ReturnType;
    };
  }
}

export const AccessibilityError = Mark.create<AccessibilityErrorOptions>({
  name: 'accessibilityError',

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      comment: {
        default: null,
        parseHTML: (el) => (el as HTMLSpanElement).getAttribute('data-accessibility-error'),
        renderHTML: (attrs) => ({ 'data-accessibility-error': attrs['accessibility-error'] }),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },


  addCommands() {
    return {
      setAccessibilityError:
        () =>
        ({ commands }) => {
          return commands.setNode(this.name);
        },
    };
  },

});
