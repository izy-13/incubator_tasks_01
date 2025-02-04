import { body } from 'express-validator';
import { errorsConstants } from '@apiConstants/index';
import { basicAuthMiddleware, validationMiddleware } from '@middlewares/index';

const { invalidString, invalidUrl } = errorsConstants;

const nameValidator = body('name').isString().isLength({ min: 1, max: 15 }).withMessage(invalidString);
const descriptionValidator = body('description').isString().isLength({ min: 1, max: 500 }).withMessage(invalidString);
const websiteUrlValidator = body('websiteUrl').isURL().isLength({ max: 100 }).withMessage(invalidUrl);

export const blogValidators = [
  basicAuthMiddleware,
  nameValidator,
  descriptionValidator,
  websiteUrlValidator,
  validationMiddleware,
];
