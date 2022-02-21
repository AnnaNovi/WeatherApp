import React from 'react';
import DateString from '../DateString/DateString';
import DayNightDegree from '../DayNightDegree/DayNightDegree'
import WeatherPredictImage from '../WeatherPredictImage/WeatherPredictImage';
import './WeatherPredictItem.css';

function WeatherPredictItem({weather, tomorrow}) {
  const predictDate = new Date(weather.dt * 1000);
  const month = predictDate.getMonth();
  const date = predictDate.getDate();
  const day = predictDate.getDay();

  const dayDegree = Math.round(weather.temp.day);
  const nightDegree = Math.round(weather.temp.night);

  const icon = weather.weather[0].icon;
  const description = weather.weather[0].description;

  let dateString;
  if(tomorrow) {
    dateString = 'Tomorrow'
  } else {
    dateString = <DateString month={month} date={date} day={day}/>
  }
  return ( 
    <div className='WeatherPredictItem'>
      {dateString}
      <WeatherPredictImage icon={icon} description={description} />
      <DayNightDegree dayDegree={dayDegree} nightDegree={nightDegree}/>
    </div>
  );
}

export default WeatherPredictItem;