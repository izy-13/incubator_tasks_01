import { Video, VideoResolutions } from '@apiTypes/index';

export const mockVideosData: Video[] = [
  {
    id: 1,
    title: 'Video 1',
    availableResolutions: [VideoResolutions.P144],
    author: 'Tom Sayer',
    canBeDownloaded: true,
    createdAt: new Date().toISOString(),
    publicationDate: new Date().toISOString(),
    minAgeRestriction: 12,
  },
];
