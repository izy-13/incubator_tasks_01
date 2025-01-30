import { Request, Response, Router } from 'express';
import { mockVideosData } from '../database/mockVideosData';

export const testingRouter = Router();

testingRouter.delete('/all-data', async (req: Request, res: Response) => {
  try {
    mockVideosData.length = 0;
    res.status(204).send('All data has been deleted');
  } catch (e) {
    res.status(500).send({ error: 'An error occurred while fetching videos', e });
  }
});
