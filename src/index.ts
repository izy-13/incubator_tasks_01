import express from 'express';
import { generalConstants } from '@apiConstants/index';
import { setupServer } from '@utils/index';
import { routesHometask_01_01 } from '@hometasks/index';

const { PORT } = generalConstants;
const server = express();
setupServer(server, [...routesHometask_01_01]);

server.get('/', (req, res) => {
  res.status(200).json({ version: '1.5' });
});

server.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`);
});
