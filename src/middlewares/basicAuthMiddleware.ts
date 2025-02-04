import { errorsConstants, generalConstants } from '@apiConstants/index';
import { NextFunction, Request, Response } from 'express';
import { decodeBase64 } from '@utils/index';

const { PASSWORD, USER } = generalConstants;
const { unauthorized } = errorsConstants;

export const basicAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    res.status(401).send(unauthorized);
    return;
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = decodeBase64(base64Credentials);
  const [username, password] = credentials.split(':');

  if (username === USER && password === PASSWORD) {
    next();
    return;
  }

  res.status(401).send(unauthorized);
};
