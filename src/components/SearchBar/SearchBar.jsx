import {React, useState} from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './SearchBar.css';

function SearchBar({setAsideMode}) {
  const [value, setValue] = useState('');
  function handleSearchBtn(){
    /* setLocation(value); */
    setAsideMode('defaultMode');
  }
  return ( 
    <div className='SearchBar'>
      <SearchInput value={value} onChange={event => setValue(event.target.value)} type='search' placeholder='search location' />
      <button onClick={handleSearchBtn} className='searchButton'>Search</button>
    </div>
  );
}

export default SearchBar;