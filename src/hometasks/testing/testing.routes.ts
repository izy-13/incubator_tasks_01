import { Request, Response, Router } from 'express';
import { mockVideosData } from '../01_01/database/mockVideosData';
import { errorsConstants } from '@apiConstants/index';
import { blogRepository, postRepository } from '../01_02/repositories';

const { processingError } = errorsConstants;
const { clearBlogs } = blogRepository;
const { clearPosts } = postRepository;

export const testingRouter = Router();

testingRouter.delete('/all-data', async (req: Request, res: Response) => {
  try {
    mockVideosData.length = 0;
    clearBlogs();
    clearPosts();
    res.status(204).send('All data has been deleted');
  } catch (e) {
    res.status(500).send({ error: processingError, e });
  }
});
