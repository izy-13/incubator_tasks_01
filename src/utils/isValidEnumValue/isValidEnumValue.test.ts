import { isValidEnumValue } from './isValidEnumValue';
import { errorsConstants } from '@apiConstants/index';

enum TestEnum {
  VALUE1 = 'value1',
  VALUE2 = 'value2',
  VALUE3 = 'value3',
}

describe('isValidEnumValue - function', () => {
  it('returns valid result when all values are in the enum', () => {
    const result = isValidEnumValue(Object.values(TestEnum), ['value1', 'value2'], 'testField');
    expect(result).toEqual({ field: 'testField', message: '', isValid: true });
  });

  it('returns invalid result when some values are not in the enum', () => {
    const result = isValidEnumValue(Object.values(TestEnum), ['value1', 'invalidValue'], 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidEnumValue, isValid: false });
  });

  it('returns invalid result when value is not an array', () => {
    const result = isValidEnumValue(Object.values(TestEnum), 'value1', 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidEnumValue, isValid: false });
  });

  it('returns invalid result when value array is empty', () => {
    const result = isValidEnumValue(Object.values(TestEnum), [], 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidEnumValue, isValid: false });
  });

  it('returns invalid result when enumValues array is empty', () => {
    const result = isValidEnumValue([], ['value1'], 'testField');
    expect(result).toEqual({ field: 'testField', message: errorsConstants.invalidEnumValue, isValid: false });
  });
});
