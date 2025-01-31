import { Express, Router } from 'express';

export const setupServer = (server: Express, routes: { path: string; router: Router }[]) =>
  routes.forEach(({ path, router }) => {
    server.use(path, router);
  });
