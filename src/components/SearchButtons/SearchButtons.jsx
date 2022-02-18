import React from 'react';
import './SearchButtons.css'

function SearchButtons({searchBtn}) {
  return ( 
    <div className='SearchButtons'>
      <button onClick={() => searchBtn('searchMode')} className='seachForPlaces'>Seach for places</button>
      <button className='openMap'></button>
    </div>
   );
}

export default SearchButtons;