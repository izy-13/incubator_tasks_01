import { isValidString } from './isValidString';
import { errorsConstants } from '@apiConstants/index';

describe('isValidString - function', () => {
  it('returns valid result for non-empty string within max length', () => {
    const result = isValidString('valid string', 'testField');
    expect(result).toEqual({ field: 'testField', message: '', isValid: true });
  });

  it('returns invalid result for empty string', () => {
    const result = isValidString('', 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidString, isValid: false });
  });

  it('returns invalid result for null value', () => {
    const result = isValidString(null, 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidString, isValid: false });
  });

  it('returns invalid result for undefined value', () => {
    const result = isValidString(undefined, 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidString, isValid: false });
  });

  it('returns invalid result for non-string value', () => {
    const result = isValidString(12345, 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidString, isValid: false });
  });

  it('returns invalid result for string exceeding max length', () => {
    const longString = 'a'.repeat(1001);
    const result = isValidString(longString, 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidString, isValid: false });
  });

  it('returns valid result for string equal to max length', () => {
    const maxLengthString = 'a'.repeat(1000);
    const result = isValidString(maxLengthString, 'testField');
    expect(result).toEqual({ field: 'testField', message: '', isValid: true });
  });

  it('returns invalid result for string with only spaces', () => {
    const result = isValidString('   ', 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidString, isValid: false });
  });
});
