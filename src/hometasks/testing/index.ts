import { testingRouter } from './testing.routes';
import { pathConstants } from '@apiConstants/index';

const { TESTING } = pathConstants;

export const routesTesting = [{ path: TESTING, router: testingRouter }];
