export type PrimitiveType =
  | number
  | boolean
  | string
  | null
  | undefined
  | bigint;

export type PlainObject = {
  [key: string]: PrimitiveType | PrimitiveType[] | PlainObject | PlainObject[];
};
