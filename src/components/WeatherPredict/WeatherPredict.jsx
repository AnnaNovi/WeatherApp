import React from 'react';
import { useSelector } from 'react-redux';
import WeatherPredictItem from '../WeatherPredictItem/WeatherPredictItem';
import './WeatherPredict.css';

function WeatherPredict() {

  const predictWeek = useSelector(state => state.weatherWeek);
  const predictWeekSlice = predictWeek.daily.slice(1, 6);

  return ( 
    <div className='WeatherPredict'>
      {
        predictWeekSlice.map(function(item, index){
          return <WeatherPredictItem key={index} style={{objectFit: 'contain'}} tomorrow={(index === 0 ? true : false)} weather={item} />
        })
      }
    </div>
  );
}

export default WeatherPredict;