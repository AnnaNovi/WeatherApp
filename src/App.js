import React, { useEffect } from 'react';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import {getWeather} from './components/store/getWeather';

function App() {
  
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather);

  useEffect(() => {
    dispatch(getWeather('Moscow', 'metric'));
  }, []);

  return (
      <div className="App">
        {weather && <Aside />}
        {weather && <Content />}
      </div>
  );
}

export default App;
