import { Router } from 'express';
import {
  createPostController,
  deletePostController,
  getPostByIdController,
  getPostController,
  updatePostController,
} from '../controllers';
import { postValidators } from '../validations/post.validations';

export const postRouter = Router();

postRouter.post('/', ...postValidators, createPostController);
postRouter.put('/:id', ...postValidators, updatePostController);
postRouter.delete('/:id', ...postValidators, deletePostController);
postRouter.get('/', getPostController);
postRouter.get('/:id', getPostByIdController);
