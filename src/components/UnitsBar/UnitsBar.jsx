import React from 'react';
import './UnitsBar.css'

function UnitsBar() {
  return ( 
    <div className='UnitsBar'>
      <div className='unitItem metric unitItemActive'></div>
      <div className='unitItem imperial'></div>
    </div>
  );
}

export default UnitsBar;