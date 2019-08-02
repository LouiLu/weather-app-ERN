import { SET_WEATHER } from '../actions/types';

const initialWeatherState = {
  currentWeather: null
};

const weatherReducer = (state = initialWeatherState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        currentWeather: action.payload.currentWeather
      };
    default:
      return state;
  }
};

export default weatherReducer;
