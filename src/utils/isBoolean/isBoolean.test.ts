import { isBoolean } from './isBoolean';
import { ErrorInfo } from '@apiTypes/index';
import { errorsConstants } from '@apiConstants/index';

describe('isBoolean - function', () => {
  it('returns valid for boolean true', () => {
    const result: ErrorInfo = isBoolean(true, 'isActive');
    expect(result).toEqual({ field: 'isActive', message: '', isValid: true });
  });

  it('returns valid for boolean false', () => {
    const result: ErrorInfo = isBoolean(false, 'isActive');
    expect(result).toEqual({ field: 'isActive', message: '', isValid: true });
  });

  it('returns invalid for string value', () => {
    const result: ErrorInfo = isBoolean('true', 'isActive');
    expect(result).toEqual({ field: 'isActive', message: errorsConstants.invalidBoolean, isValid: false });
  });

  it('returns invalid for number value', () => {
    const result: ErrorInfo = isBoolean(1, 'isActive');
    expect(result).toEqual({ field: 'isActive', message: errorsConstants.invalidBoolean, isValid: false });
  });

  it('returns invalid for null value', () => {
    const result: ErrorInfo = isBoolean(null, 'isActive');
    expect(result).toEqual({ field: 'isActive', message: errorsConstants.invalidBoolean, isValid: false });
  });

  it('returns invalid for undefined value', () => {
    const result: ErrorInfo = isBoolean(undefined, 'isActive');
    expect(result).toEqual({ field: 'isActive', message: errorsConstants.invalidBoolean, isValid: false });
  });

  it('returns invalid for object value', () => {
    const result: ErrorInfo = isBoolean({}, 'isActive');
    expect(result).toEqual({ field: 'isActive', message: errorsConstants.invalidBoolean, isValid: false });
  });

  it('returns invalid for array value', () => {
    const result: ErrorInfo = isBoolean([], 'isActive');
    expect(result).toEqual({ field: 'isActive', message: errorsConstants.invalidBoolean, isValid: false });
  });
});
