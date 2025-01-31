import { setupServer } from './setupServer';
import { Express, Router } from 'express';

describe('setupServer - function', () => {
  let server: Express;
  let router: Router;

  beforeEach(() => {
    server = { use: jest.fn() } as unknown as Express;
    router = { get: jest.fn() } as unknown as Router;
  });

  it('adds a single route to the server', () => {
    const routes = [{ path: '/test', router }];
    setupServer(server, routes);
    expect(server.use).toHaveBeenCalledWith('/test', router);
  });

  it('adds multiple routes to the server', () => {
    const routes = [
      { path: '/test1', router },
      { path: '/test2', router },
    ];
    setupServer(server, routes);
    expect(server.use).toHaveBeenCalledWith('/test1', router);
    expect(server.use).toHaveBeenCalledWith('/test2', router);
  });

  it('does not add any routes if routes array is empty', () => {
    const routes: { path: string; router: Router }[] = [];
    setupServer(server, routes);
    expect(server.use).not.toHaveBeenCalled();
  });

  it('throws an error if server is null', () => {
    expect(() => setupServer(null as unknown as Express, [{ path: '/test', router }])).toThrow();
  });

  it('throws an error if routes is null', () => {
    expect(() => setupServer(server, null as unknown as { path: string; router: Router }[])).toThrow();
  });
});
