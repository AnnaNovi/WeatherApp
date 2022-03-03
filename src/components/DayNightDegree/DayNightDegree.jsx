import React from 'react';
import { useSelector } from 'react-redux';

function DayNightDegree({dayDegree, nightDegree}) {
  const currentUnit = useSelector(state => state.unit);
  return ( 
    <div style={{display: 'flex', justifyContent: 'space-between'}} className='DayNightDegree'>
      <span>{dayDegree}°C</span>
      <span style={{color: '#A09FB1'}}>{nightDegree}{(currentUnit === 'metric') ? '°С' : '°F'}</span>
    </div>
  );
}

export default DayNightDegree;