import { Request, Response } from 'express';
import { blogRepository } from '../../repositories';
import { errorsConstants, infoMessagesConstant } from '@apiConstants/index';

const { deleteBlog } = blogRepository;
const { processingError, itemNotFound } = errorsConstants;
const { itemDeleted } = infoMessagesConstant;

export const deleteBlogController = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const canDeleteBlog = deleteBlog(id);

    if (canDeleteBlog) {
      res.status(204).send(itemDeleted);
      return;
    }

    res.status(404).send(itemNotFound);
  } catch (e) {
    res.status(500).send({ error: processingError, e });
  }
};
