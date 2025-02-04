import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorsArray = errors.array();
    const uniqueErrorsMap = new Map<string, { field: string; message: string }>();

    errorsArray.forEach((error) => {
      if (error.type === 'field') {
        uniqueErrorsMap.set(error.path, { field: error.path, message: error.msg });
      }
    });

    const uniqueErrors = Array.from(uniqueErrorsMap.values());

    res.status(400).send({ errorsMessages: uniqueErrors });
  } else {
    next();
  }
};
