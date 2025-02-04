import { pathConstants } from '@apiConstants/index';
import { videosRouter } from './routes/videos.routes';

const { VIDEOS } = pathConstants;

export const routesHometask_01_01 = [{ path: VIDEOS, router: videosRouter }];
