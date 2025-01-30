export type ErrorInfo = {
  message: string;
  field: string;
  isValid: boolean;
};

export type ErrorMessages = {
  errorsMessages: Omit<ErrorInfo, 'isValid'>[];
};
