import React from 'react';

function DayNightDegree({dayDegree, nightDegree}) {
  return ( 
    <div style={{display: 'flex', justifyContent: 'space-between'}} className='DayNightDegree'>
      <span>{dayDegree}°C</span>
      <span style={{color: '#A09FB1'}}>{nightDegree}°C</span>
    </div>
  );
}

export default DayNightDegree;