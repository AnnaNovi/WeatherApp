import {React, useState} from 'react';
import SearchInput from '../SearchInput/SearchInput';
import {getWeather} from '../WeatherContent/getWeather.js';
import './SearchBar.css';

function SearchBar({searchBtn}) {
  const [value, setValue] = useState('');
  function handleSearchBtn(){
    getWeather(value);
    searchBtn('defaultMode');
  }
  return ( 
    <div className='SearchBar'>
      <SearchInput value={value} onChange={event => setValue(event.target.value)} type='search' placeholder='search location' />
      <button onClick={handleSearchBtn} className='searchButton'>Search</button>
    </div>
   );
}

export default SearchBar;