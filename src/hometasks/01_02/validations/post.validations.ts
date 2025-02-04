import { body } from 'express-validator';
import { errorsConstants } from '@apiConstants/index';
import { basicAuthMiddleware, validationMiddleware } from '@middlewares/index';
import { blogRepository } from '../repositories';

const { invalidString, invalidId } = errorsConstants;

const titleValidator = body('title')
  .trim()
  .exists()
  .isString()
  .isLength({ min: 1, max: 30 })
  .withMessage(invalidString);
const shortDescriptionValidator = body('shortDescription')
  .exists()
  .trim()
  .isString()
  .isLength({ min: 1, max: 100 })
  .withMessage(invalidString);
const contentValidator = body('content')
  .trim()
  .exists()
  .isString()
  .isLength({ min: 1, max: 1000 })
  .withMessage(invalidString);
const blogIdValidator = body('blogId')
  .trim()
  .exists()
  .isString()
  .custom((value) => {
    const blog = blogRepository.findBlogById(value);
    if (!blog) {
      throw new Error(invalidId);
    }

    return true;
  })
  .withMessage(invalidId);

export const postValidators = [
  basicAuthMiddleware,
  titleValidator,
  shortDescriptionValidator,
  contentValidator,
  blogIdValidator,
  validationMiddleware,
];
