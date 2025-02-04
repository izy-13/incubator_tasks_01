import { Request, Response } from 'express';
import { blogRepository } from '../../repositories';
import { errorsConstants } from '@apiConstants/errors.constants';

const { createBlog } = blogRepository;
const { processingError } = errorsConstants;

// 401 if user is not authorized
export const createBlogController = (req: Request, res: Response) => {
  try {
    const newBlog = createBlog(req.body);
    res.status(201).json(newBlog);
  } catch (e) {
    res.status(500).send({ error: processingError, e });
  }
};
