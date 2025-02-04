import { Request, Response } from 'express';
import { blogRepository } from '../../repositories';
import { errorsConstants } from '@apiConstants/index';

const { findBlogById } = blogRepository;
const { processingError, itemNotFound } = errorsConstants;

export const getBlogByIdController = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const foundBlog = findBlogById(id);

    if (foundBlog) {
      res.status(200).send(foundBlog);
      return;
    }

    res.status(404).send(itemNotFound);
  } catch (e) {
    res.status(500).send({ error: processingError, e });
  }
};
