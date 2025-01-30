import { pathConstants } from '@constants/index';
import { testingRouter } from './routes/testing.routes';
import { videosRouter } from './routes/videos.routes';

const { TESTING, VIDEOS } = pathConstants;

export const routesHometask_01_01 = [
  { path: TESTING, router: testingRouter },
  { path: VIDEOS, router: videosRouter },
];
