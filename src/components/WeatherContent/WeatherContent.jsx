import React from 'react';
import DateBar from '../DateBar/DateBar';
import './WeatherContent.css'

function WeatherContent(weather) {
  console.log()
  let degres = (weather?.main) ? weather.main.feels_like : '15';
  let mainValue = 'Snow';
  return ( 
    <div className='WeatherContent'>
      <div className='degres'>{degres}<span>°С</span></div>
      <div className='mainValue'>{mainValue}</div>
      <DateBar />
    </div>
  );
}

export default WeatherContent;