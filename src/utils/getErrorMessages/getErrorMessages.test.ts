import { getErrorMessages } from './getErrorMessages';
import { ErrorInfo } from '@apiTypes/index';

describe('getErrorMessages - function', () => {
  it('returns empty error messages for all valid errors', () => {
    const errors: ErrorInfo[] = [
      { field: 'field1', message: '', isValid: true },
      { field: 'field2', message: '', isValid: true },
    ];
    const result = getErrorMessages(errors);
    expect(result).toEqual({ errorsMessages: [] });
  });

  it('returns error messages for all invalid errors', () => {
    const errors: ErrorInfo[] = [
      { field: 'field1', message: 'Error 1', isValid: false },
      { field: 'field2', message: 'Error 2', isValid: false },
    ];
    const result = getErrorMessages(errors);
    expect(result).toEqual({
      errorsMessages: [
        { field: 'field1', message: 'Error 1' },
        { field: 'field2', message: 'Error 2' },
      ],
    });
  });

  it('returns error messages for mixed valid and invalid errors', () => {
    const errors: ErrorInfo[] = [
      { field: 'field1', message: 'Error 1', isValid: false },
      { field: 'field2', message: '', isValid: true },
    ];
    const result = getErrorMessages(errors);
    expect(result).toEqual({
      errorsMessages: [{ field: 'field1', message: 'Error 1' }],
    });
  });

  it('returns empty error messages for empty errors array', () => {
    const errors: ErrorInfo[] = [];
    const result = getErrorMessages(errors);
    expect(result).toEqual({ errorsMessages: [] });
  });
});
