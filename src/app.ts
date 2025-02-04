import express from 'express';
import { setupServer } from '@utils/index';
import { routesHometask_01_01, routesHometask_01_02 } from '@hometasks/index';

export const server = express();
const routes = [...routesHometask_01_01, ...routesHometask_01_02];

server.use(express.json());
setupServer(server, routes);

server.get('/', (req, res) => {
  res.status(200).json({ version: '1.0' });
});
