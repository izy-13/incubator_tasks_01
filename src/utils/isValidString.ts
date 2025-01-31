import { ErrorInfo } from '@apiTypes/index';

/**
 * Checks if the input is a valid non-empty string.
 * @param {unknown} value - The value to check.
 * @param {string} field - The name field.
 * @param {number} maxLength - max length of value.
 * @returns {ErrorInfo} All info about field.
 */
export function isValidString(value: unknown, field: string, maxLength: number = 1000): ErrorInfo {
  if (!value) {
    return { field, message: 'Invalid string', isValid: false };
  }

  const isValid = typeof value === 'string' && value.trim().length <= maxLength;
  return { field, message: isValid ? '' : 'Invalid string', isValid };
}
