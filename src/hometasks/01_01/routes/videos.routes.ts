import { Request, Response, Router } from 'express';
import { mockVideosData } from '../database/mockVideosData';
import { canUpdateVideo, isNewVideoValid } from '../validations';
import { createNewVideo, updateCurrentVideo } from '../utils';

export const videosRouter = Router();

videosRouter.get('/', (req: Request, res: Response) => {
  try {
    res.status(200).send(mockVideosData);
  } catch (e) {
    res.status(500).send({ error: 'An error occurred while fetching videos', e });
  }
});
videosRouter.get('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const video = mockVideosData.find((video) => video.id === +id);

    if (video) {
      res.status(200).send(video);
      return;
    }

    res.status(404).send('Video not found');
  } catch (e) {
    res.status(500).send({ error: 'An error occurred while fetching videos', e });
  }
});

videosRouter.post('/', (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { isValid, errorData } = isNewVideoValid(body);

    if (isValid) {
      const newVideo = createNewVideo(body);
      mockVideosData.push(newVideo);
      res.status(201).send(newVideo);
    }

    res.status(400).send(errorData);
  } catch (e) {
    res.status(500).send({ error: 'An error occurred while fetching videos', e });
  }
});

videosRouter.put('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const videoIndex = mockVideosData.findIndex((video) => video.id === +id);

    if (videoIndex === -1) {
      res.status(404).send('Video not found');
      return;
    }

    const { isValid, errorData } = canUpdateVideo(req.body);

    if (!isValid) {
      res.status(400).send(errorData);
      return;
    }

    updateCurrentVideo(mockVideosData, req.body, videoIndex);
    res.status(204).send('Video has been updated');
  } catch (e) {
    res.status(500).send({ error: 'An error occurred while fetching videos', e });
  }
});

videosRouter.delete('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const videoIndex = mockVideosData.findIndex((video) => video.id === +id);

    if (videoIndex === -1) {
      res.status(404).send('Video not found');
      return;
    }

    mockVideosData.splice(videoIndex, 1);
    res.status(204).send('Video has been deleted');
  } catch (e) {
    res.status(500).send({ error: 'An error occurred while fetching videos', e });
  }
});
