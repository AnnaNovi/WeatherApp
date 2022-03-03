import React from 'react';
import { useDispatch } from 'react-redux';
import './LocationItem.css';
import { setAsideModeAction } from '../../store/asideModeReducer';
import { sortLocationAction } from '../../store/locationHistoryReducer';
import { useSelector } from 'react-redux';
import {getWeather} from '../../store/getWeather';

function LocationItem({locationName}) {

  const currentUnit = useSelector(state => state.unit)
  const dispatch = useDispatch();

  function handleSearchBtn(){
    dispatch(getWeather(locationName, currentUnit));
    dispatch(sortLocationAction(locationName));
    dispatch(setAsideModeAction('defaultMode'))
  }
  return ( 
    <div className='LocationItem' onClick={handleSearchBtn}>
      {locationName}
    </div>
  );
}

export default LocationItem;