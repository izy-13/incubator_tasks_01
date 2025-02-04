import { Router } from 'express';
import {
  createPostController,
  deletePostController,
  getPostByIdController,
  getPostController,
  updatePostController,
} from '../controllers';

export const postRouter = Router();

postRouter.post('/', createPostController);
postRouter.put('/:id', updatePostController);
postRouter.delete('/:id', deletePostController);
postRouter.get('/', getPostController);
postRouter.get('/:id', getPostByIdController);
