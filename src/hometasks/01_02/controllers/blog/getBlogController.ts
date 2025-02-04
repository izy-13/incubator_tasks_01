import { Request, Response } from 'express';
import { blogRepository } from '../../repositories';
import { errorsConstants } from '@apiConstants/index';

const { processingError } = errorsConstants;
const { findBlogs } = blogRepository;

export const getBlogController = (req: Request, res: Response) => {
  try {
    const foundBlogs = findBlogs();
    res.status(200).json(foundBlogs);
  } catch (e) {
    res.status(500).send({ error: processingError, e });
  }
};
