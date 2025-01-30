export enum VideoResolutions {
  P144 = 'P144',
  P240 = 'P240',
  P360 = 'P360',
  P480 = 'P480',
  P720 = 'P720',
  P1080 = 'P1080',
  P1440 = 'P1440',
  P2160 = 'P2160',
}

export type Video = {
  id: number;
  title: string;
  author: string;
  /**
   * @default false
   */
  canBeDownloaded: boolean;
  /**
   * @maximum 18
   * @minimum 1
   * @default null
   * @nullable true
   */
  minAgeRestriction: number | null;
  createdAt: string;
  /**
   * @default +- 1 dat from createdAt
   */
  publicationDate: string;
  availableResolutions: VideoResolutions[];
};

export type NewVideoBody = Pick<Video, 'title' | 'author' | 'availableResolutions'>;
