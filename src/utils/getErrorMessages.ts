import { ErrorInfo, ErrorMessages } from '@apiTypes/index';

export const getErrorMessages = (errors: ErrorInfo[]): ErrorMessages => {
  return {
    errorsMessages: errors.map(({ field, message }) => ({ field, message })),
  };
};
