import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { ErrorInfo } from '@apiTypes/index';

export const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorsArray = errors.array({ onlyFirstError: true });
    const uniqueErrors = Array.from(
      new Set(
        errorsArray.reduce((acc: Omit<ErrorInfo, 'isValid'>[], error) => {
          if (error.type === 'field') {
            const newError = { field: error.path, message: error.msg };
            acc.push(newError);
          }

          return acc;
        }, [])
      )
    );

    res.status(400).send({ errorsMessages: uniqueErrors });
  } else {
    next();
  }
};
