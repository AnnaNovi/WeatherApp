import React from 'react';
import DateString from '../DateString/DateString';
import './DateBar.css';

function DateBar() {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const day = currentDate.getDay();
  return ( 
    <div className='DateBar'>
      <span>Today</span>
      <span className='circleDelimiter'></span>
      <DateString month={month} date={date} day={day}/>
    </div>
   );
}

export default DateBar;