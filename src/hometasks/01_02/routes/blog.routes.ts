import { Router } from 'express';
import {
  createBlogController,
  deleteBlogController,
  getBlogByIdController,
  getBlogController,
  updateBlogController,
} from '../controllers';
import { blogValidators } from '../validations/blog.validations';
import { basicAuthMiddleware } from '@middlewares/index';

export const blogRouter = Router();

blogRouter.post('/', ...blogValidators, createBlogController);
blogRouter.put('/:id', ...blogValidators, updateBlogController);
blogRouter.delete('/:id', basicAuthMiddleware, deleteBlogController);
blogRouter.get('/', getBlogController);
blogRouter.get('/:id', getBlogByIdController);
