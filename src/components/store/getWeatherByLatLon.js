import { getWeatherWeekAction } from "./weatherWeekReducer";

export function getWeatherByLatLon(lat, lon){
  const key= '6f0c5f18ea074a548e4dec9c6ac3a947';
  return function(dispatch) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${key}`)
      .then(response => response.json())
      .then(result => dispatch(getWeatherWeekAction(result)));
  }
}