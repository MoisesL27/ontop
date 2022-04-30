import { Validations } from './validation';

interface BaseServerResponse<T> {
  statusCode?: number;
  data: T;
  message?: string;
  /**
   * Is a message key, bakend send a message key to show a friendly message to the user,
   * the key should be stored in the frontend translation files
   */
  key?: string | null;
  status: boolean;
}
export interface ServerResponse<T = any> extends BaseServerResponse<T> {
  /**
   * Indicates if the request was successfully
   */
  status: true;
}

export interface FailServerResponse<T = any, V = Validations>
  extends BaseServerResponse<T> {
  /**
   * Indicates if the request was successfully
   */
  status: false;
  customErrors: V;
}
