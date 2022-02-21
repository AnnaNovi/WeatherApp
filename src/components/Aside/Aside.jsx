import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchButtons from '../SearchButtons/SearchButtons';
import WeatherContent from '../WeatherContent/WeatherContent';
import CityList from '../CityList/CityList';
import './Aside.css';

function Aside() {

  let content;
  const [asideMode, setAsideMode] = useState('defaultMode');

  if(asideMode === 'defaultMode'){
    content = <>
      <SearchButtons searchBtn={setAsideMode}/>
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