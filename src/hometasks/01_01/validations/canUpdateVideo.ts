import { ErrorMessages, Video, VideoResolutions } from '@apiTypes/index';
import {
  getErrorMessages,
  isBoolean,
  isValidEnumValue,
  isValidIntInRange,
  isValidISODate,
  isValidString,
} from '@utils/index';
import { AUTHOR_MAX_LENGTH, MAX_AGE, MIN_AGE, TITLE_MAX_LENGTH } from '../constants';

export const canUpdateVideo = (video: Video): { isValid: boolean; errorData: ErrorMessages } => {
  if (!video) {
    return {
      isValid: false,
      errorData: getErrorMessages([{ message: 'Video is required', field: 'body', isValid: false }]),
    };
  }

  const data = Object.entries(video).map(([key, value]) => {
    switch (key) {
      case 'title':
      case 'author':
        return isValidString(value, key, key === 'title' ? TITLE_MAX_LENGTH : AUTHOR_MAX_LENGTH);
      case 'canBeDownloaded':
        return isBoolean(value, key);
      case 'minAgeRestriction':
        return isValidIntInRange(value, key, MIN_AGE, MAX_AGE);
      case 'availableResolutions':
        return isValidEnumValue(Object.values(VideoResolutions), value, key);
      case 'publicationDate':
        return isValidISODate(value, key);
      default:
        return { message: 'Invalid field', field: key, isValid: false };
    }
  });

  return { isValid: data.every(({ isValid }) => isValid), errorData: getErrorMessages(data) };
};
