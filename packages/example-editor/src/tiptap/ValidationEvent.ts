import { Editor } from '@tiptap/core';
import { ValidationError } from './validation-error';

export type ValidationEvent = CustomEvent<{ errors: ValidationError[] }>;
