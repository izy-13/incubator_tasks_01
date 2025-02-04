import { Request, Response } from 'express';
import { postRepository } from '../../repositories';

export const getPostByIdController = (req: Request, res: Response) => {
  const foundPosts = postRepository.findPosts();
  res.status(200).json(foundPosts);
};
