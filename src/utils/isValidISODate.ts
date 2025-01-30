import { ErrorInfo } from '@apiTypes/index';

/**
 * Checks if a value is a valid ISO 8601 date string.
 * @param {unknown} value - The value to check.
 * @param {string} field - The field name.
 * @returns {ErrorInfo} All info about field.
 */

const errorsData = { message: 'Invalid date format', isValid: false };

export function isValidISODate(value: unknown, field: string): ErrorInfo {
  if (typeof value !== 'string') {
    return { field, ...errorsData };
  }

  // ISO 8601 regex pattern
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

  if (!isoDateRegex.test(value)) {
    return { field, ...errorsData };
  }

  // Ensure it’s a valid date
  const date = new Date(value);
  if (isNaN(date.getTime())) {
    return { field, ...errorsData };
  }

  return { isValid: true, field, message: '' }; // Valid date check
}
