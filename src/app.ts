import express from 'express';
import { setupServer } from '@utils/index';
import { routesHometask_01_01 } from '@hometasks/index';

export const server = express();

server.use(express.json());
setupServer(server, [...routesHometask_01_01]);

server.get('/', (req, res) => {
  res.status(200).json({ version: '1.2' });
});
