import { generalConstants } from '@apiConstants/index';
import { server } from './app';

const { PORT } = generalConstants;

server.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`);
});
