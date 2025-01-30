import { ErrorInfo } from '@apiTypes/index';

/**
 * Checks if a value is a valid integer within the range [1, 18] or null.
 * @param {unknown} value - The value to check.
 * @param {string} field - The field name.
 * @param {number} [minValue=1] - The minimum allowed value (default: 1).
 * @param {number} [maxValue=100] - The maximum allowed value (default: 100).
 * @returns {ErrorInfo} All info about field.
 */

export const isValidIntInRange = (
  value: unknown,
  field: string,
  minValue: number = 1,
  maxValue: number = 100
): ErrorInfo => {
  const isValid = typeof value === 'number' && value >= minValue && value <= maxValue;

  return { field, message: isValid ? '' : 'Invalid integer value', isValid };
};
