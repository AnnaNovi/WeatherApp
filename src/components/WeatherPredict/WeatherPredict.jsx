import React from 'react';
import { useSelector } from 'react-redux';
import './WeatherPredict.css';

function WeatherPredict() {

  const predictWeek = useSelector(state => state.weatherWeek);
  console.log(predictWeek);

  return ( 
    <div className='WeatherPredict'>
      HI-HI-HI
    </div>
  );
}

export default WeatherPredict;