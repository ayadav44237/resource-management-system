import React from 'react';
import {BiUser} from "react-icons/bi"
import "./index.css";

const Navbar = ({page, setPage}) => {
  return (
    <div className='navbar'>
        <div className='navbar__left' onClick={() => setPage(0)}>
           
        </div>
        <div className='navbar__right'>
            {
              page === 0 && <button className='navbar__button' onClick={() => setPage(1)}>Add Item</button>
            }
            <div className='navbar__logo'></div>
        </div>
    </div>
  )
}

export default Navbar
