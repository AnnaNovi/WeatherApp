import {getWeatherAction} from './weatherReducer';

export function getWeather(value, units){
  const key= '6f0c5f18ea074a548e4dec9c6ac3a947';
  return function(dispatch) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=${units}&appid=${key}`)
      .then(response => response.json())
      .then(result => dispatch(getWeatherAction(result)))
  }
}
