import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchButtons from '../SearchButtons/SearchButtons';
import WeatherContent from '../WeatherContent/WeatherContent';
import CityList from '../CityList/CityList';
import { useSelector } from 'react-redux';
import WeatherPredictImage from '../WeatherPredictImage/WeatherPredictImage';
import './Aside.css';

function Aside() {

  let content;
  const [asideMode, setAsideMode] = useState('defaultMode');
  const weather = useSelector(state => state.weather);
  console.log(weather);

  const icon = weather.weather[0].icon;
  const description = weather.weather[0].description;

  if(asideMode === 'defaultMode'){
    content = <>
      <SearchButtons searchBtn={setAsideMode}/>
      <WeatherPredictImage style={{objectFit: 'contain', width: '100%'}} icon={icon} description={description}/>
      <WeatherContent />
    </>
  } else {
    content = <>
      <SearchBar setAsideMode={setAsideMode} />
      <CityList />
      <span onClick={() => setAsideMode('defaultMode')} className='closeBtn'></span>
    </>
  }
  return ( 
    <div className='Aside'>
      {content}
    </div>
  );
}

export default Aside;