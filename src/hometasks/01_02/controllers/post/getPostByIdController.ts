import { Request, Response } from 'express';
import { postRepository } from '../../repositories';
import { errorsConstants } from '@apiConstants/errors.constants';

const { findPostById } = postRepository;
const { processingError, itemNotFound } = errorsConstants;

export const getPostByIdController = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const foundPost = findPostById(id);
    if (foundPost) {
      res.status(200).send(foundPost);
      return;
    }

    res.status(404).send(itemNotFound);
  } catch (e) {
    res.status(500).send({ error: processingError, e });
  }
};
