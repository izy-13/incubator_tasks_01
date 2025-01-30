import { ErrorInfo, ErrorMessages, NewVideoBody, VideoResolutions } from '@apiTypes/index';
import { getErrorMessages, isValidEnumValue, isValidString } from '@utils/index';
import { AUTHOR_MAX_LENGTH, TITLE_MAX_LENGTH } from '../constants';

export const isNewVideoValid = (video: NewVideoBody): { isValid: boolean; errorData: ErrorMessages } => {
  if (!video) {
    return {
      isValid: false,
      errorData: getErrorMessages([{ message: 'Video is required', field: 'body', isValid: false }]),
    };
  }

  const data: ErrorInfo[] = Object.entries(video).map(([key, value]) => {
    switch (key) {
      case 'title':
      case 'author':
        return isValidString(value, key, key === 'title' ? TITLE_MAX_LENGTH : AUTHOR_MAX_LENGTH);
      case 'availableResolutions':
        return isValidEnumValue(Object.values(VideoResolutions), value, key);
      default:
        return { message: 'Invalid field', field: key, isValid: false };
    }
  });

  return { isValid: data.some(({ isValid }) => !isValid), errorData: getErrorMessages(data) };
};
