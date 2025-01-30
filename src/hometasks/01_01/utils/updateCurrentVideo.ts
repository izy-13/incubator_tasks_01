import { Video } from '@apiTypes/index';

export const updateCurrentVideo = (dbVideos: Video[], updatedVideo: Video, videoIndex: number) => {
  dbVideos[videoIndex] = { ...dbVideos[videoIndex], ...updatedVideo };
};
