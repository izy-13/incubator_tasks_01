import { ErrorInfo } from '@apiTypes/index';
import { errorsConstants } from '@apiConstants/index';

/**
 * Checks if the input is a valid non-empty string.
 * @param {unknown} value - The value to check.
 * @param {string} field - The name field.
 * @param {number} maxLength - max length of value.
 * @returns {ErrorInfo} All info about field.
 */
export function isValidString(value: unknown, field: string, maxLength: number = 1000): ErrorInfo {
  if (!value || (typeof value === 'string' && value.trim().length === 0)) {
    return { field, message: errorsConstants.invalidString, isValid: false };
  }

  const isValid = typeof value === 'string' && value.trim().length <= maxLength;
  return { field, message: isValid ? '' : errorsConstants.invalidString, isValid };
}
