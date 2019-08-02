import { SET_WEATHER } from './types';

export const setWeather = weather => {
  return {
    type: SET_WEATHER,
    payload: {
      currentWeather: weather
    }
  };
};
