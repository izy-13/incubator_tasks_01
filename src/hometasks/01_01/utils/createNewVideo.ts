import { NewVideoBody, Video } from '@apiTypes/index';

export const createNewVideo = (newVideo: NewVideoBody): Video => {
  const createdAt = new Date();
  const publicationDate = new Date(createdAt);
  publicationDate.setDate(publicationDate.getDate() + 1);

  return {
    ...newVideo,
    id: Math.floor(Math.random() * 100000),
    minAgeRestriction: null,
    createdAt: createdAt.toISOString(),
    publicationDate: publicationDate.toISOString(),
    canBeDownloaded: false,
  };
};
