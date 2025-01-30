import { ErrorInfo } from '@apiTypes/index';

/**
 * Checks if the given value exists in the provided enum values array.
 * @template T Enum type
 * @param {T[]} enumValues - The array of valid enum values.
 * @param {T} value - The value to check.
 * @param {string} field - The field name.
 * @returns {ErrorInfo} All info about field.
 */
export function isValidEnumValue<T>(enumValues: T[], value: T[] | unknown, field: string): ErrorInfo {
  const isValid = Array.isArray(value) && value.every((v) => enumValues.includes(v));
  return { field, message: isValid ? '' : 'Invalid enum value', isValid };
}
