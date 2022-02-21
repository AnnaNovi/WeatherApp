import React, {useEffect} from 'react';
import Hightlights from '../Hightlights/Hightlights.jsx';
import WeatherPredict from '../WeatherPredict/WeatherPredict.jsx';
import './Content.css';
import { useDispatch, useSelector } from 'react-redux';
import {getWeatherByLatLon} from '../store/getWeatherByLatLon'
import UnitsBar from '../UnitsBar/UnitsBar.jsx';

function Content() {

  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather);
  const weatherWeek = useSelector(state => state.weatherWeek);

  useEffect(() => {
    dispatch(getWeatherByLatLon(weather.coord.lat, weather.coord.lon, 'metric'));
  }, []);

  return ( 
    <div className='Content'>
      <UnitsBar />
      {weatherWeek && <WeatherPredict />}
      <div className='blockName'>Today’s Hightlights</div>
      <Hightlights />
    </div>
  );
}

export default Content;