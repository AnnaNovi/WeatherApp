import WeatherContent from "./WeatherContent";

export function getWeather(value){
  const key= '6f0c5f18ea074a548e4dec9c6ac3a947';

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}`)
  .then(response => response.json())
  .then(WeatherContent)
}