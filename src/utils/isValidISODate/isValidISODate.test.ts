import { isValidISODate } from './isValidISODate';
import { errorsConstants } from '@apiConstants/index';

describe('isValidISODate - function', () => {
  it('returns valid result for correct ISO 8601 date string', () => {
    const result = isValidISODate('2023-10-10T10:10:10.000Z', 'testField');
    expect(result).toEqual({ field: 'testField', message: '', isValid: true });
  });

  it('returns invalid result for non-string value', () => {
    const result = isValidISODate(12345, 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidDate, isValid: false });
  });

  it('returns invalid result for incorrect ISO 8601 date string', () => {
    const result = isValidISODate('2023-10-10 10:10:10', 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidDate, isValid: false });
  });

  it('returns invalid result for string that is not a date', () => {
    const result = isValidISODate('not-a-date', 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidDate, isValid: false });
  });

  it('returns invalid result for null value', () => {
    const result = isValidISODate(null, 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidDate, isValid: false });
  });

  it('returns invalid result for undefined value', () => {
    const result = isValidISODate(undefined, 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidDate, isValid: false });
  });

  it('returns invalid result for valid ISO 8601 string but invalid date', () => {
    const result = isValidISODate('2023-02-30T10:10:10.000Z', 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidDate, isValid: false });
  });
});
