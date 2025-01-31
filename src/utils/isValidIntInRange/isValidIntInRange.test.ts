import { isValidIntInRange } from './isValidIntInRange';
import { errorsConstants } from '@apiConstants/index';

describe('isValidIntInRange - function', () => {
  it('returns valid result for integer within range', () => {
    const result = isValidIntInRange(10, 'testField');
    expect(result).toEqual({ field: 'testField', message: '', isValid: true });
  });

  it('returns invalid result for integer below minimum range', () => {
    const result = isValidIntInRange(0, 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidInteger, isValid: false });
  });

  it('returns invalid result for integer above maximum range', () => {
    const result = isValidIntInRange(101, 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidInteger, isValid: false });
  });

  it('returns invalid result for non-integer value', () => {
    const result = isValidIntInRange('string', 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidInteger, isValid: false });
  });

  it('returns valid result for integer equal to minimum range', () => {
    const result = isValidIntInRange(1, 'testField');
    expect(result).toEqual({ field: 'testField', message: '', isValid: true });
  });

  it('returns valid result for integer equal to maximum range', () => {
    const result = isValidIntInRange(100, 'testField');
    expect(result).toEqual({ field: 'testField', message: '', isValid: true });
  });

  it('returns invalid result for null value', () => {
    const result = isValidIntInRange(null, 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidInteger, isValid: false });
  });

  it('returns invalid result for undefined value', () => {
    const result = isValidIntInRange(undefined, 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidInteger, isValid: false });
  });
});
