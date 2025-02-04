import { Router } from 'express';
import {
  createPostController,
  deletePostController,
  getPostByIdController,
  getPostController,
  updatePostController,
} from '../controllers';
import { postValidators } from '../validations/post.validations';
import { basicAuthMiddleware } from '@middlewares/index';

export const postRouter = Router();

postRouter.post('/', ...postValidators, createPostController);
postRouter.put('/:id', ...postValidators, updatePostController);
postRouter.delete('/:id', basicAuthMiddleware, deletePostController);
postRouter.get('/', getPostController);
postRouter.get('/:id', getPostByIdController);
