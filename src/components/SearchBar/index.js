import React from 'react';
import {FiSearch} from 'react-icons/fi';

import "./index.css";

const SearchBar = () => {
  return (
    <div class="searchbar">
        <FiSearch className='searchbar__icon'/>
        <input type="text" placeholder="Search" className='searchbar__input' />
    </div>
  )
}

export default SearchBar
