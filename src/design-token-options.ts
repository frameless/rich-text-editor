import { VariantOptionGroup } from './types';

const primaryButton1 = {
  'utrecht.button.primary-action.background-color': '{basis.color.primary.interactive-1}',
  'utrecht.button.primary-action.border-color': '{basis.color.primary.border-2}',
  'utrecht.button.primary-action.color': '{basis.color.primary.text-2}',
  'utrecht.button.primary-action.hover.background-color': '{basis.color.primary.interactive-2}',
  'utrecht.button.primary-action.hover.border-color': '{basis.color.primary.border-3}',
  'utrecht.button.primary-action.hover.color': '{basis.color.primary.text-2}',
  'utrecht.button.primary-action.active.background-color': '{basis.color.primary.interactive-3}',
  'utrecht.button.primary-action.active.border-color': '{basis.color.primary.border-3}',
  'utrecht.button.primary-action.active.color': '{basis.color.primary.text-2}',
};

const primaryButton2 = {
  ...primaryButton1,
  'utrecht.button.primary-action.border-color': '{basis.color.transparent}',
};

const primaryButton3 = {
  'utrecht.button.primary-action.background-color': '{basis.color.primary-inverse.interactive-1}',
  'utrecht.button.primary-action.border-color': '{basis.color.primary-inverse.border-2}',
  'utrecht.button.primary-action.color': '{basis.color.primary-inverse.text-2}',
  'utrecht.button.primary-action.hover.background-color': '{basis.color.primary-inverse.interactive-2}',
  'utrecht.button.primary-action.hover.border-color': '{basis.color.primary-inverse.border-3}',
  'utrecht.button.primary-action.hover.color': '{basis.color.primary-inverse.text-2}',
  'utrecht.button.primary-action.active.background-color': '{basis.color.primary-inverse.interactive-3}',
  'utrecht.button.primary-action.active.border-color': '{basis.color.primary-inverse.border-3}',
  'utrecht.button.primary-action.active.color': '{basis.color.primary-inverse.text-2}',
};

const primaryButton4 = {
  ...primaryButton3,
  'utrecht.button.primary-action.border-color': '{basis.color.transparent}',
  'utrecht.button.primary-action.hover.border-color': '{basis.color.transparent}',
  'utrecht.button.primary-action.active.border-color': '{basis.color.transparent}',
};

const primaryButton5 = {
  ...primaryButton1,
  'utrecht.button.primary-action.background-color': '{basis.color.transparent}',
};

const primaryButton6 = {
  ...primaryButton5,
  'utrecht.button.primary-action.background-color': '{basis.color.transparent}',
  'utrecht.button.primary-action.border-color': '{basis.color.transparent}',
};

// const updateKeys = <T>(object: { [index: string]: T }, callback: (arg: string) => string) =>
// Object.fromEntries(Object.entries(object).map(([key, value]) => [callback(key), value]));

const updateKeysValues = (object: { [index: string]: string }, callback: (arg: string) => string) =>
  Object.fromEntries(Object.entries(object).map(([key, value]) => [callback(key), callback(value)]));

const secondaryButton1 = updateKeysValues(primaryButton1, (arg: string) => arg.replace('primary', 'secondary'));
const secondaryButton2 = updateKeysValues(primaryButton2, (arg: string) => arg.replace('primary', 'secondary'));
const secondaryButton3 = updateKeysValues(primaryButton3, (arg: string) => arg.replace('primary', 'secondary'));
const secondaryButton4 = updateKeysValues(primaryButton4, (arg: string) => arg.replace('primary', 'secondary'));

const subtleButton1 = updateKeysValues(primaryButton1, (arg: string) => arg.replace('primary-action', 'subtle'));
const subtleButton2 = updateKeysValues(primaryButton2, (arg: string) => arg.replace('primary-action', 'subtle'));
const subtleButton3 = updateKeysValues(primaryButton3, (arg: string) => arg.replace('primary-action', 'subtle'));
const subtleButton4 = updateKeysValues(primaryButton4, (arg: string) => arg.replace('primary-action', 'subtle'));
const subtleButton5 = updateKeysValues(primaryButton5, (arg: string) => arg.replace('primary-action', 'subtle'));
const subtleButton6 = updateKeysValues(primaryButton6, (arg: string) => arg.replace('primary-action', 'subtle'));

// TODO: Include these as default values in the Basis Theme
const basisAlertTokens = {
  'utrecht.alert.border-color': '{basis.color.text.border-1}',
  'utrecht.alert.info.border-color': '{basis.color.info.border-1}',
  'utrecht.alert.error.border-color': '{basis.color.error.border-1}',
  'utrecht.alert.ok.border-color': '{basis.color.success.border-1}',
  'utrecht.alert.warning.border-color': '{basis.color.warning.border-1}',
};
const aaTargetSize = {
  'basis.pointer-target.min-block-size': '24px',
  'basis.pointer-target.min-inline-size': '24px',
};
const aaaTargetSize = {
  'basis.pointer-target.min-block-size': '44px',
  'basis.pointer-target.min-inline-size': '44px',
};

const materialTargetSize = {
  'basis.pointer-target.min-block-size': '48px',
  'basis.pointer-target.min-inline-size': '48px',
};

const formControlPaddingBlockZero = {
  'basis.form-control.padding-block-start': '0',
  'basis.form-control.padding-block-end': '0',
};
const formControlPaddingBlockSmall = {
  'basis.form-control.padding-block-start': '{basis.space.block.sm}',
  'basis.form-control.padding-block-end': '{basis.space.block.sm}',
};
const formControlPaddingBlockMedium = {
  'basis.form-control.padding-block-start': '{basis.space.block.md}',
  'basis.form-control.padding-block-end': '{basis.space.block.md}',
};
const formControlPaddingBlockLarge = {
  'basis.form-control.padding-block-start': '{basis.space.block.lg}',
  'basis.form-control.padding-block-end': '{basis.space.block.lg}',
};

const formControlPaddingInlineZero = {
  'basis.form-control.padding-inline-start': '0',
  'basis.form-control.padding-inline-end': '0',
};
const formControlPaddingInlineSmall = {
  'basis.form-control.padding-inline-start': '{basis.space.inline.sm}',
  'basis.form-control.padding-inline-end': '{basis.space.inline.sm}',
};
const formControlPaddingInlineMedium = {
  'basis.form-control.padding-inline-start': '{basis.space.inline.md}',
  'basis.form-control.padding-inline-end': '{basis.space.inline.md}',
};
const formControlPaddingInlineLarge = {
  'basis.form-control.padding-inline-start': '{basis.space.inline.lg}',
  'basis.form-control.padding-inline-end': '{basis.space.inline.lg}',
};

export const variants: VariantOptionGroup[] = [
  {
    id: 'heading-color',
    variants: [
      {
        id: 'text',
        flatTokens: {
          'utrecht.heading-1.color': '{basis.color.text.text-2}',
          'utrecht.heading-2.color': '{basis.color.text.text-2}',
          'utrecht.heading-3.color': '{basis.color.text.text-2}',
          'utrecht.heading-4.color': '{basis.color.text.text-2}',
          'utrecht.heading-5.color': '{basis.color.text.text-2}',
          'utrecht.heading-6.color': '{basis.color.text.text-2}',
        },
        name: 'Text color',
        recommended: true,
      },
      {
        id: 'primary',
        flatTokens: {
          'utrecht.heading-1.color': '{basis.color.primary.text-2}',
          'utrecht.heading-2.color': '{basis.color.primary.text-2}',
          'utrecht.heading-3.color': '{basis.color.primary.text-2}',
          'utrecht.heading-4.color': '{basis.color.primary.text-2}',
          'utrecht.heading-5.color': '{basis.color.primary.text-2}',
          'utrecht.heading-6.color': '{basis.color.primary.text-2}',
        },
        name: 'Primary color',
      },
      {
        id: 'primary-fill',
        flatTokens: {
          'utrecht.heading-1.color': '{basis.color.primary.fill-2}',
          'utrecht.heading-2.color': '{basis.color.primary.fill-2}',
          'utrecht.heading-3.color': '{basis.color.primary.fill-2}',
          'utrecht.heading-4.color': '{basis.color.primary.fill-2}',
          'utrecht.heading-5.color': '{basis.color.primary.fill-2}',
          'utrecht.heading-6.color': '{basis.color.primary.fill-2}',
        },
        name: 'Primary fill color',
      },
      {
        id: 'secondary',
        flatTokens: {
          'utrecht.heading-1.color': '{basis.color.secondary.text-2}',
          'utrecht.heading-2.color': '{basis.color.secondary.text-2}',
          'utrecht.heading-3.color': '{basis.color.secondary.text-2}',
          'utrecht.heading-4.color': '{basis.color.secondary.text-2}',
          'utrecht.heading-5.color': '{basis.color.secondary.text-2}',
          'utrecht.heading-6.color': '{basis.color.secondary.text-2}',
        },
        name: 'Secondary color',
      },
      {
        id: 'secondary-fill',
        flatTokens: {
          'utrecht.heading-1.color': '{basis.color.secondary.fill-2}',
          'utrecht.heading-2.color': '{basis.color.secondary.fill-2}',
          'utrecht.heading-3.color': '{basis.color.secondary.fill-2}',
          'utrecht.heading-4.color': '{basis.color.secondary.fill-2}',
          'utrecht.heading-5.color': '{basis.color.secondary.fill-2}',
          'utrecht.heading-6.color': '{basis.color.secondary.fill-2}',
        },
        name: 'Secondary fill color',
      },
    ],
  },
  {
    id: 'primary-button-appearance',
    variants: [
      {
        id: 'primary',
        flatTokens: primaryButton1,
        name: 'Plain with border',
      },
      {
        id: 'primary-borderless',
        flatTokens: primaryButton2,
        name: 'Plain without border',
      },
      {
        id: 'primary-inverse',
        flatTokens: primaryButton3,
        name: 'Inverse with border',
      },
      {
        id: 'primary-inverse-borderless',
        flatTokens: primaryButton4,
        name: 'Inverse without border',
        recommended: true,
      },
    ],
  },
  {
    id: 'secondary-button-appearance',
    variants: [
      {
        id: 'secondary',
        flatTokens: secondaryButton1,
        name: 'Plain with border',
        recommended: true,
      },
      {
        id: 'secondary-borderless',
        flatTokens: secondaryButton2,
        name: 'Plain without border',
      },
      {
        id: 'secondary-inverse-border',
        flatTokens: secondaryButton3,
        name: 'Inverse with border',
      },
      {
        id: 'secondary-inverse-borderless',
        flatTokens: secondaryButton4,
        name: 'Inverse without border',
      },
    ],
  },
  {
    id: 'subtle-button-appearance',
    variants: [
      {
        id: 'subtle',
        flatTokens: subtleButton1,
        name: 'Plain with border',
      },
      {
        id: 'subtle-borderless',
        flatTokens: subtleButton2,
        name: 'Plain without border',
      },
      {
        id: 'subtle-inverse',
        flatTokens: subtleButton3,
        name: 'Inverse with border',
      },
      {
        id: 'subtle-inverse-borderless',
        flatTokens: subtleButton4,
        name: 'Inverse without border',
      },
      {
        id: 'transparent-border',
        flatTokens: subtleButton5,
        name: 'Transparent with border',
      },
      {
        id: 'transparent',
        flatTokens: subtleButton6,
        name: 'Transparent without border',
        recommended: true,
      },
    ],
  },
  {
    id: 'pointer-target-size',
    variants: [
      {
        id: 'wcag-aa',
        flatTokens: aaTargetSize,
        name: 'WCAG Level AA: 24px',
      },
      {
        id: 'wcag-aaa',
        flatTokens: aaaTargetSize,
        name: 'WCAG Level AAA: 44px',
        recommended: true,
      },
      {
        id: 'material',
        flatTokens: materialTargetSize,
        name: 'Material Design: 48px',
      },
    ],
  },
  {
    id: 'button-border-radius',
    variants: [
      {
        id: 'square',
        flatTokens: {
          'utrecht.button.border-radius': '0',
        },
        name: 'Square corners',
      },
      {
        id: 'sm',
        flatTokens: {
          'utrecht.button.border-radius': '{basis.border-radius.sm}',
        },
        name: 'Small',
        recommended: true,
      },
      {
        id: 'md',
        flatTokens: {
          'utrecht.button.border-radius': '{basis.border-radius.md}',
        },
        name: 'Medium',
      },
      {
        id: 'lg',
        flatTokens: {
          'utrecht.button.border-radius': '{basis.border-radius.lg}',
        },
        name: 'Large',
      },
      {
        id: 'round',
        flatTokens: {
          'utrecht.button.border-radius': '{basis.border-radius.round}',
        },
        name: 'Round',
      },
    ],
  },
  {
    id: 'form-control-padding-block',
    variants: [
      {
        id: 'zero',
        flatTokens: formControlPaddingBlockZero,
        name: 'No padding',
      },
      {
        id: 'sm',
        flatTokens: formControlPaddingBlockSmall,
        name: 'Small',
      },
      {
        id: 'md',
        flatTokens: formControlPaddingBlockMedium,
        name: 'Medium',
        recommended: true,
      },
      {
        id: 'lg',
        flatTokens: formControlPaddingBlockLarge,
        name: 'Large',
      },
    ],
  },
  {
    id: 'form-control-padding-inline',
    variants: [
      {
        id: 'zero',
        flatTokens: formControlPaddingInlineZero,
        name: 'No padding',
      },
      {
        id: 'sm',
        flatTokens: formControlPaddingInlineSmall,
        name: 'Small',
      },
      {
        id: 'md',
        flatTokens: formControlPaddingInlineMedium,
        name: 'Medium',
        recommended: true,
      },
      {
        id: 'lg',
        flatTokens: formControlPaddingInlineLarge,
        name: 'Large',
      },
    ],
  },
  {
    id: 'form-control-border-width',
    variants: [
      {
        id: 'sm',
        flatTokens: {
          'basis.form-control.border-width': '{basis.border-width.sm}',
        },
        name: 'Small',
        recommended: true,
      },
      {
        id: 'md',
        flatTokens: {
          'basis.form-control.border-width': '{basis.border-width.md}',
        },
        name: 'Medium',
      },
    ],
  },
  {
    id: 'button-border-width',
    variants: [
      {
        id: 'sm',
        flatTokens: {
          'utrecht.button.border-width': '{basis.border-width.sm}',
        },
        name: 'Small',
        recommended: true,
      },
      {
        id: 'md',
        flatTokens: {
          'utrecht.button.border-width': '{basis.border-width.md}',
        },
        name: 'Medium',
      },
    ],
  },
  {
    id: 'data-badge-appearance',
    variants: [
      {
        id: 'subtle',
        flatTokens: {
          'utrecht.data-badge.background-color': '{basis.color.primary.interactive-1}',
          'utrecht.data-badge.border-color': '{basis.color.transparent}',
          'utrecht.data-badge.border-width': '{basis.border-width.sm}',
          'utrecht.data-badge.color': '{basis.color.primary.text-2}',
        },
        name: 'Subtle',
      },
      {
        id: 'border',
        flatTokens: {
          'utrecht.data-badge.background-color': '{basis.color.primary.interactive-1}',
          'utrecht.data-badge.border-color': '{basis.color.primary.border-2}',
          'utrecht.data-badge.border-width': '{basis.border-width.sm}',
          'utrecht.data-badge.color': '{basis.color.primary.text-2}',
        },
        name: 'With border',
        recommended: true,
      },
      {
        id: 'inverse',
        flatTokens: {
          'utrecht.data-badge.background-color': '{basis.color.primary-inverse.interactive-1}',
          'utrecht.data-badge.border-color': '{basis.color.transparent}',
          'utrecht.data-badge.border-width': '0',
          'utrecht.data-badge.color': '{basis.color.primary-inverse.text-2}',
        },
        name: 'Inverse',
      },
    ],
  },
  {
    id: 'number-badge-appearance',
    variants: [
      {
        id: 'subtle',
        flatTokens: {
          'utrecht.number-badge.background-color': '{basis.color.primary.interactive-1}',
          'utrecht.number-badge.border-color': '{basis.color.transparent}',
          'utrecht.number-badge.border-width': '{basis.border-width.sm}',
          'utrecht.number-badge.color': '{basis.color.primary.text-2}',
        },
        name: 'Subtle',
      },
      {
        id: 'border',
        flatTokens: {
          'utrecht.number-badge.background-color': '{basis.color.primary.interactive-1}',
          'utrecht.number-badge.border-color': '{basis.color.primary.border-2}',
          'utrecht.number-badge.border-width': '{basis.border-width.sm}',
          'utrecht.number-badge.color': '{basis.color.primary.text-2}',
        },
        name: 'With border',
      },
      {
        id: 'inverse',
        flatTokens: {
          'utrecht.number-badge.background-color': '{basis.color.primary-inverse.interactive-1}',
          'utrecht.number-badge.border-color': '{basis.color.transparent}',
          'utrecht.number-badge.border-width': '0',
          'utrecht.number-badge.color': '{basis.color.primary-inverse.text-2}',
        },
        name: 'Inverse',
        recommended: true,
      },
    ],
  },
  {
    id: 'page-footer-appearance',
    variants: [
      {
        id: 'text',
        flatTokens: {
          'utrecht.page-footer.content.background-color': '{basis.color.text.interactive-1}',
          'utrecht.page-footer.border-color': '{basis.color.text.border-1}',
          'utrecht.page-footer.color': '{basis.color.text.text-2}',
        },
        name: 'Text',
      },
      {
        id: 'text-inverse',
        flatTokens: {
          'utrecht.page-footer.content.background-color': '{basis.color.text-inverse.interactive-1}',
          'utrecht.page-footer.border-color': '{basis.color.text-inverse.border-1}',
          'utrecht.page-footer.color': '{basis.color.text-inverse.text-2}',
        },
        name: 'Text inverse',
      },
      {
        id: 'primary',
        flatTokens: {
          'utrecht.page-footer.content.background-color': '{basis.color.primary.interactive-1}',
          'utrecht.page-footer.border-color': '{basis.color.primary.border-1}',
          'utrecht.page-footer.color': '{basis.color.primary.text-2}',
        },
        name: 'Primary',
        recommended: true,
      },
      {
        id: 'primary-inverse',
        flatTokens: {
          'utrecht.page-footer.content.background-color': '{basis.color.primary-inverse.interactive-1}',
          'utrecht.page-footer.border-color': '{basis.color.primary-inverse.border-1}',
          'utrecht.page-footer.color': '{basis.color.primary-inverse.text-2}',
        },
        name: 'Primary inverse',
      },
      {
        id: 'secondary',
        flatTokens: {
          'utrecht.page-footer.content.background-color': '{basis.color.secondary.interactive-1}',
          'utrecht.page-footer.border-color': '{basis.color.secondary.border-1}',
          'utrecht.page-footer.color': '{basis.color.secondary.text-2}',
        },
        name: 'Secondary',
      },
      {
        id: 'secondary-inverse',
        flatTokens: {
          'utrecht.page-footer.content.background-color': '{basis.color.secondary-inverse.interactive-1}',
          'utrecht.page-footer.border-color': '{basis.color.secondary-inverse.border-1}',
          'utrecht.page-footer.color': '{basis.color.secondary-inverse.text-2}',
        },
        name: 'Secondary inverse',
      },
    ],
  },
  {
    id: 'page-footer-inline-size',
    variants: [
      {
        id: 'center',
        flatTokens: {
          'utrecht.page-footer.background-color': '{basis.color.transparent}',
          'utrecht.page-footer.max-inline-size': '{utrecht.page-footer.content.max-inline-size}',
          'utrecht.page-footer.content.max-inline-size': '{basis.page.max-inline-size}',
        },
        name: 'Centered',
      },
      {
        id: 'full-width',
        flatTokens: {
          'utrecht.page-footer.background-color': '{utrecht.page-footer.content.background-color}',
          'utrecht.page-footer.max-inline-size': '100%',
          'utrecht.page-footer.content.max-inline-size': '{basis.page.max-inline-size}',
        },
        name: 'Full width',
        recommended: true,
      },
    ],
  },
  {
    id: 'page-inline-size',
    variants: [
      {
        id: '1140',
        flatTokens: {
          'basis.page.max-inline-size': '1140px',
        },
        name: '1140px',
      },
      {
        id: '1200',
        flatTokens: {
          'basis.page.max-inline-size': '1200px',
        },
        name: '1200px',
      },
    ],
  },
  {
    id: 'space-block',
    variants: [
      {
        id: 'md',
        flatTokens: {
          'basis.space.block.6xl': '160px',
          'basis.space.block.5xl': '64px',
          'basis.space.block.4xl': '32px',
          'basis.space.block.3xl': '24px',
          'basis.space.block.2xl': '20px',
          'basis.space.block.xl': '16px',
          'basis.space.block.lg': '12px',
          'basis.space.block.md': '8px',
          'basis.space.block.sm': '4px',
          'basis.space.block.xs': '2px',
          'basis.space.block.2xs': '1px',
        },
        name: 'Default',
        recommended: true,
      },
      {
        id: 'xs',
        flatTokens: {
          'basis.space.block.6xl': `${160 * 0.75}px`,
          'basis.space.block.5xl': `${64 * 0.75}px`,
          'basis.space.block.4xl': `${32 * 0.75}px`,
          'basis.space.block.3xl': `${24 * 0.75}px`,
          'basis.space.block.2xl': `${20 * 0.75}px`,
          'basis.space.block.xl': `${16 * 0.75}px`,
          'basis.space.block.lg': `${12 * 0.75}px`,
          'basis.space.block.md': `${8 * 0.75}px`,
          'basis.space.block.sm': `${4 * 0.75}px`,
          'basis.space.block.xs': '2px',
          'basis.space.block.2xs': '1px',
        },
        name: 'Compact (75%)',
      },
      {
        id: 'sm',
        flatTokens: {
          'basis.space.block.6xl': `${160 * 0.5}px`,
          'basis.space.block.5xl': `${64 * 0.5}px`,
          'basis.space.block.4xl': `${32 * 0.5}px`,
          'basis.space.block.3xl': `${24 * 0.5}px`,
          'basis.space.block.2xl': `${20 * 0.5}px`,
          'basis.space.block.xl': `${16 * 0.5}px`,
          'basis.space.block.lg': `${12 * 0.5}px`,
          'basis.space.block.md': `${8 * 0.5}px`,
          'basis.space.block.sm': `${4 * 0.5}px`,
          'basis.space.block.xs': '2px',
          'basis.space.block.2xs': '1px',
        },
        name: 'Small (50%)',
      },
    ],
  },
  {
    id: 'space-inline',
    variants: [
      {
        id: 'md',
        flatTokens: {
          'basis.space.inline.6xl': '160px',
          'basis.space.inline.5xl': '64px',
          'basis.space.inline.4xl': '32px',
          'basis.space.inline.3xl': '24px',
          'basis.space.inline.2xl': '20px',
          'basis.space.inline.xl': '16px',
          'basis.space.inline.lg': '12px',
          'basis.space.inline.md': '8px',
          'basis.space.inline.sm': '4px',
          'basis.space.inline.xs': '2px',
          'basis.space.inline.2xs': '1px',
        },
        name: 'Default',
        recommended: true,
      },
      {
        id: 'sm',
        flatTokens: {
          'basis.space.inline.6xl': `${160 * 0.75}px`,
          'basis.space.inline.5xl': `${64 * 0.75}px`,
          'basis.space.inline.4xl': `${32 * 0.75}px`,
          'basis.space.inline.3xl': `${24 * 0.75}px`,
          'basis.space.inline.2xl': `${20 * 0.75}px`,
          'basis.space.inline.xl': `${16 * 0.75}px`,
          'basis.space.inline.lg': `${12 * 0.75}px`,
          'basis.space.inline.md': `${8 * 0.75}px`,
          'basis.space.inline.sm': `${4 * 0.75}px`,
          'basis.space.inline.xs': '2px',
          'basis.space.inline.2xs': '1px',
        },
        name: 'Compact (75%)',
      },
      {
        id: 'xs',
        flatTokens: {
          'basis.space.inline.6xl': `${160 * 0.5}px`,
          'basis.space.inline.5xl': `${64 * 0.5}px`,
          'basis.space.inline.4xl': `${32 * 0.5}px`,
          'basis.space.inline.3xl': `${24 * 0.5}px`,
          'basis.space.inline.2xl': `${20 * 0.5}px`,
          'basis.space.inline.xl': `${16 * 0.5}px`,
          'basis.space.inline.lg': `${12 * 0.5}px`,
          'basis.space.inline.md': `${8 * 0.5}px`,
          'basis.space.inline.sm': `${4 * 0.5}px`,
          'basis.space.inline.xs': '2px',
          'basis.space.inline.2xs': '1px',
        },
        name: 'Small (50%)',
      },
    ],
  },
  {
    id: 'alert-appearance',
    variants: [
      {
        id: 'subtle',
        flatTokens: {
          ...basisAlertTokens,
          'utrecht.alert.border-width': '0',
        },
        name: 'No border',
      },
      {
        id: 'border-sm',
        flatTokens: {
          ...basisAlertTokens,
          'utrecht.alert.border-width': '{basis.border-width.sm}',
        },
        name: 'Small border',
      },
      {
        id: 'border-md',
        flatTokens: {
          ...basisAlertTokens,
          'utrecht.alert.border-width': '{basis.border-width.md}',
        },
        name: 'Medium border',
        recommended: true,
      },
    ],
  },
  {
    id: 'form-control-border-radius',
    variants: [
      {
        id: 'square',
        flatTokens: {
          'basis.form-control.border-radius': '0',
        },
        name: 'Square corners',
        recommended: true,
      },
      {
        id: 'sm',
        flatTokens: {
          'basis.form-control.border-radius': '{basis.border-radius.sm}',
        },
        name: 'Small',
      },
      {
        id: 'md',
        flatTokens: {
          'basis.form-control.border-radius': '{basis.border-radius.md}',
        },
        name: 'Medium',
      },
      {
        id: 'lg',
        flatTokens: {
          'basis.form-control.border-radius': '{basis.border-radius.lg}',
        },
        name: 'Large',
      },
    ],
  },
];
