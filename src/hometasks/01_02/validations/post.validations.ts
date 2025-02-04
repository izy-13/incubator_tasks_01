import { body } from 'express-validator';
import { errorsConstants } from '@apiConstants/index';
import { basicAuthMiddleware, validationMiddleware } from '@middlewares/index';

const { invalidString, invalidId } = errorsConstants;

const titleValidator = body('title').isString().isLength({ max: 30 }).withMessage(invalidString);
const shortDescriptionValidator = body('shortDescription').isString().isLength({ max: 100 }).withMessage(invalidString);
const contentValidator = body('content').isString().isLength({ max: 1000 }).withMessage(invalidString);
const blogIdValidator = body('blogId').exists().isString().withMessage(invalidId);

export const postValidators = [
  basicAuthMiddleware,
  titleValidator,
  shortDescriptionValidator,
  contentValidator,
  blogIdValidator,
  validationMiddleware,
];
