import {React, useState} from 'react';
import SearchInput from '../SearchInput/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.css';
import {getWeather} from '../../store/getWeather';
import {addLocationAction} from '../../store/locationHistoryReducer';
import {setAsideModeAction} from '../../store/asideModeReducer';

function SearchBar() {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  const currentUnit = useSelector(state => state.unit);

  function handleSearchBtn(){
    dispatch(getWeather(value, currentUnit));
    dispatch(setAsideModeAction('defaultMode'));
    dispatch(addLocationAction(`${value}`));
  }
  return ( 
    <div className='SearchBar'>
      <SearchInput value={value} onChange={event => (value === '') ? setValue(event.target.value.toUpperCase()) : setValue(event.target.value)} type='search' placeholder='search location' />
      <button onClick={handleSearchBtn} className='searchButton'>Search</button>
    </div>
  );
}

export default SearchBar;