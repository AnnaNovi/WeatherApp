import React from 'react';
import './Hightlights.css';
import { useSelector } from 'react-redux';

function Hightlights() {

  const currentWeather = useSelector(state => state.weather);

  const windSpeed = Math.round(currentWeather.wind.speed);
  const humidity = currentWeather.main.humidity;
  const visibility = currentWeather.visibility * 0.001;
  const pressure = currentWeather.main.pressure;

  return ( 
    <div className='Hightlights'>
      <div className='HightlightsItem'>
        <div className='itemTitle'>Wind status</div>
        <div className='itemInfo'>{windSpeed}<span> m/s</span></div>
        <div className='windDirection'></div>
      </div>
      <div className='HightlightsItem'>
        <div className='itemTitle'>Humidity</div>
        <div className='itemInfo'>{humidity}<span>%</span></div>
        <div className='windRangeValue'><span>0</span><span>50</span><span>100</span></div>
        <div className='windRange'>
          <span className='windRangePercent' style={{width: humidity + '%'}}></span>
        </div>
        <div className='windRangeValue' style={{justifyContent: 'flex-end'}}><span>%</span></div>
      </div>
      <div className='HightlightsItem'>
        <div className='itemTitle'>Visibility</div>
        <div className='itemInfo'>{visibility}<span> km</span></div>
      </div>
      <div className='HightlightsItem'>
        <div className='itemTitle'>Air Pressure</div>
        <div className='itemInfo'>{pressure}<span> mb</span></div>
      </div>
    </div>
  );
}

export default Hightlights;