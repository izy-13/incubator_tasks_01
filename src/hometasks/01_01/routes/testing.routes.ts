import { Router } from 'express';

export const testingRouter = Router();

testingRouter.delete('/all-data', async (req, res) => {
  try {
    res.status(200).send('All data has been deleted');
  } catch (e) {
    res.status(500).send(e);
  }
});
