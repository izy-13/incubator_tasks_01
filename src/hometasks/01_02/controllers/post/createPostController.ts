import { Request, Response } from 'express';
import { postRepository } from '../../repositories';
import { errorsConstants } from '@apiConstants/index';

const { createPost } = postRepository;
const { processingError } = errorsConstants;

export const createPostController = (req: Request, res: Response) => {
  try {
    const newPost = createPost(req.body);
    res.status(201).json(newPost);
  } catch (e) {
    res.status(500).send({ error: processingError, e });
  }
};
