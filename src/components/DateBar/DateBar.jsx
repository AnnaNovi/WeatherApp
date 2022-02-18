import React from 'react';
import './DateBar.css';

function DateBar() {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const day = currentDate.getDay();
  function getMonth(){
    switch (month) {
      case 0:
        return 'Jan';
      case 1:
        return 'Feb';
      case 2:
        return 'Mar';
      case 3:
        return 'Apr';
      case 4:
        return 'May';
      case 5:
        return 'Jun';
      case 6:
        return 'Jul';
      case 7:
        return 'Aug';
      case 8:
        return 'Sep';
      case 9:
        return 'Oct';
      case 10:
        return 'Nov';
      case 11:
        return 'Dec';
      default:
        return 'Error';
    }
  }
  function getDay() {
    switch (day) {
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      default:
        return 'Error';
    }
  }
  return ( 
    <div className='DateBar'>
      <span>Today</span>
      <span className='circleDelimiter'></span>
      <span>{`${getDay()}, ${date} ${getMonth()}`}</span>
    </div>
   );
}

export default DateBar;