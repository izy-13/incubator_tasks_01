import request from 'supertest';
import { mockVideosData } from '@hometasks/01_01/database/mockVideosData';
import { Video } from '@apiTypes/index';
import { server } from '../../app';

describe('DELETE /testing/all-data', () => {
  beforeEach(() => {
    mockVideosData.push({ id: 1, title: 'Test Video' } as unknown as Video);
  });

  afterEach(() => {
    mockVideosData.length = 0;
  });

  it('deletes all data and returns 204 status', async () => {
    const response = await request(server).delete('/testing/all-data');
    expect(response.status).toBe(204);
    expect(mockVideosData.length).toBe(0);
  });
});
