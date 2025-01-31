import { ErrorInfo, ErrorMessages } from '@apiTypes/index';

export const getErrorMessages = (errors: ErrorInfo[]): ErrorMessages => {
  return {
    errorsMessages: errors.reduce((acc: Omit<ErrorInfo, 'isValid'>[], { field, message, isValid }) => {
      if (!isValid) {
        acc.push({ field, message });
      }
      return acc;
    }, []),
  };
};
