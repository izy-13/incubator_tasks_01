import request from 'supertest';
import { mockVideosData } from '@hometasks/01_01/database/mockVideosData';
import { Video } from '@apiTypes/index';
import { server } from '../../app';

describe('GET /videos', () => {
  beforeEach(() => {
    mockVideosData.push({ id: 1, title: 'Test Video' } as unknown as Video);
  });

  afterEach(() => {
    mockVideosData.length = 0;
  });

  it('returns all videos with 200 status', async () => {
    const response = await request(server).get('/videos');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockVideosData);
  });
});

describe('GET /videos/:id', () => {
  beforeEach(() => {
    mockVideosData.push({ id: 1, title: 'Test Video' } as unknown as Video);
  });

  afterEach(() => {
    mockVideosData.length = 0;
  });

  it('returns a video by id with 200 status', async () => {
    const response = await request(server).get('/videos/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockVideosData[0]);
  });

  it('returns 404 status if video not found', async () => {
    const response = await request(server).get('/videos/999');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Video not found');
  });
});

describe('POST /videos', () => {
  afterEach(() => {
    mockVideosData.length = 0;
  });

  it('creates a new video and returns 201 status', async () => {
    const newVideo = { title: 'New Video' };
    const response = await request(server).post('/videos').send(newVideo);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newVideo);
    expect(mockVideosData.length).toBe(1);
  });

  it('returns 400 status if video data is invalid', async () => {
    const invalidVideo = { title: '' };
    const response = await request(server).post('/videos').send(invalidVideo);
    expect(response.status).toBe(400);
  });
});

describe('PUT /videos/:id', () => {
  beforeEach(() => {
    mockVideosData.push({ id: 1, title: 'Test Video' } as unknown as Video);
  });

  afterEach(() => {
    mockVideosData.length = 0;
  });

  it('updates a video and returns 204 status', async () => {
    const updatedVideo = { title: 'Updated Video' };
    const response = await request(server).put('/videos/1').send(updatedVideo);
    expect(response.status).toBe(204);
    expect(mockVideosData[0].title).toBe('Updated Video');
  });

  it('returns 404 status if video not found', async () => {
    const updatedVideo = { title: 'Updated Video' };
    const response = await request(server).put('/videos/999').send(updatedVideo);
    expect(response.status).toBe(404);
    expect(response.text).toBe('Video not found');
  });

  it('returns 400 status if video data is invalid', async () => {
    const invalidVideo = { title: '' };
    const response = await request(server).put('/videos/1').send(invalidVideo);
    expect(response.status).toBe(400);
  });
});

describe('DELETE /videos/:id', () => {
  beforeEach(() => {
    mockVideosData.push({ id: 1, title: 'Test Video' } as unknown as Video);
  });

  afterEach(() => {
    mockVideosData.length = 0;
  });

  it('deletes a video and returns 204 status', async () => {
    const response = await request(server).delete('/videos/1');
    expect(response.status).toBe(204);
    expect(mockVideosData.length).toBe(0);
  });

  it('returns 404 status if video not found', async () => {
    const response = await request(server).delete('/videos/999');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Video not found');
  });
});
