import React, { useState } from 'react';
import './SearchInput.css';

function SearchInput(props) {
  return ( 
    <div className='SearchInputWrapper'>
      <input {...props} className='SearchInput'></input>
    </div>
  );
}

export default SearchInput;