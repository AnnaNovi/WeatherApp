import React from 'react';
import DateBar from '../DateBar/DateBar';
import './WeatherContent.css';
import { useSelector } from 'react-redux';

function WeatherContent() {

  const currentWeather = useSelector(state => state.weather);

  const degree = Math.round(currentWeather.main?.feels_like);
  const mainValue = currentWeather.weather[0].main;
  const location = currentWeather.name;
  return ( 
    <div className='WeatherContent'>
      <div className='degres'>{degree}<span>°С</span></div>
      <div className='mainValue'>{mainValue}</div>
      <DateBar />
      <div className='location'>{location}</div>
    </div>
  );
}

export default WeatherContent;