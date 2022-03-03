import React from 'react';

function WeatherPredictImage({icon, description}) {
  return (
    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description}/>
  );
}

export default WeatherPredictImage;