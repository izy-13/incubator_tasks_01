import { ErrorInfo } from '@apiTypes/index';
import { errorsConstants } from '@apiConstants/index';

/**
 * Checks if the given value is a boolean.
 * @param {unknown} value - The value to check.
 * @param {string} field - The field name.
 * @returns {ErrorInfo} All info about field.
 */
export function isBoolean(value: unknown, field: string): ErrorInfo {
  const isValid = typeof value === 'boolean';

  return { field, message: isValid ? '' : errorsConstants.invalidBoolean, isValid };
}
