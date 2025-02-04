import { Request, Response } from 'express';
import { postRepository } from '../../repositories';
import { errorsConstants, infoMessagesConstant } from '@apiConstants/index';

const { deletePost } = postRepository;
const { processingError, itemNotFound } = errorsConstants;
const { itemDeleted } = infoMessagesConstant;

export const deletePostController = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const canDeletePost = deletePost(id);

    if (canDeletePost) {
      res.status(204).send(itemDeleted);
      return;
    }

    res.status(404).send(itemNotFound);
  } catch (e) {
    res.status(500).send({ error: processingError, e });
  }
};
