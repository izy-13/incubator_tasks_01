import { Request, Response } from 'express';
import { blogRepository } from '../../repositories';
import { errorsConstants, infoMessagesConstant } from '@apiConstants/index';

const { processingError, itemNotFound } = errorsConstants;
const { itemUpdated } = infoMessagesConstant;
const { updateBlog } = blogRepository;

export const updateBlogController = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const canUpdateBlog = updateBlog(id, req.body);

    if (canUpdateBlog) {
      res.status(204).send(itemUpdated);
      return;
    }

    res.status(404).send(itemNotFound);
  } catch (e) {
    res.status(500).send({ error: processingError, e });
  }
};
