import { pathConstants } from '@apiConstants/index';
import { blogRouter } from './routes/blog.routes';
import { postRouter } from './routes/post.routes';

const { BLOG, POST } = pathConstants;

export const routesHometask_01_02 = [
  { path: BLOG, router: blogRouter },
  { path: POST, router: postRouter },
];
