import { Request, Response } from 'express';
import { postRepository } from '../../repositories';
import { errorsConstants } from '@apiConstants/index';

const { findPosts } = postRepository;
const { processingError } = errorsConstants;

export const getPostController = (req: Request, res: Response) => {
  try {
    const foundPosts = findPosts();
    res.status(200).json(foundPosts);
  } catch (e) {
    res.status(500).send({ error: processingError, e });
  }
};
