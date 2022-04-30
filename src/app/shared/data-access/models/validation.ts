import { PlainObject, PrimitiveType } from '@ontop/shared/utils';

export interface Validation {
  /**
   * @deprecated
   */
  isValid?: boolean;
  [key: string]: PrimitiveType | PlainObject;
}

export interface Validations {
  [key: string]: Validation;
}
