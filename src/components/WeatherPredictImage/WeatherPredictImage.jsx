import React from 'react';

function WeatherPredictImage({icon, description, style}) {
  return (
    <img style={style} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description}/>
  );
}

export default WeatherPredictImage;