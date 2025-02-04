import { Request, Response } from 'express';
import { errorsConstants, infoMessagesConstant } from '@apiConstants/index';
import { postRepository } from '../../repositories';

const { updatePost } = postRepository;
const { processingError, itemNotFound } = errorsConstants;
const { itemUpdated } = infoMessagesConstant;

export const updatePostController = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const canUpdatePost = updatePost(id, req.body);

    if (canUpdatePost) {
      res.status(204).send(itemUpdated);
      return;
    }

    res.status(404).send(itemNotFound);
  } catch (e) {
    res.status(500).send({ error: processingError, e });
  }
};
