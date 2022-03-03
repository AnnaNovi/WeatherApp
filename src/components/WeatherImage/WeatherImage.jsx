import React from 'react';
import { useSelector } from 'react-redux';
import './WeatherImage.css';
import Atmosphere from './Atmosphere.png';
import Clear from './Clear.png';
import HeavyCloud from './HeavyCloud.png';
import HeavyRain from './HeavyRain.png';
import LightCloud from './LightCloud.png';
import LightRain from './LightRain.png';
import Snow from './Snow.png';
import Thunderstorm from './Thunderstorm.png';

function WeatherImage() {

  const weather = useSelector(store => store.weather);

  function getWeatherImage(){
    switch(weather.weather[0].main) {
      case 'Thunderstorm':
        return Thunderstorm;
      case 'Drizzle':
        return LightRain;
      case 'Rain':
        return HeavyRain;
      case 'Snow':
        return Snow;
      case 'Atmosphere':
        return Atmosphere;
      case 'Clear':
        return Clear;
      case 'Clouds':
        return HeavyCloud;
      default:
        return LightCloud;
    }
  }
  return ( 
    <div className='WeatherImage'>
      <img src={getWeatherImage()} alt='Clear'></img>
    </div>
  );
}

export default WeatherImage;