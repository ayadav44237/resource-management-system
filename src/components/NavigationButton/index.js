import React from 'react'
import "./index.css";
const NavigationButton= () => {
  return (
    <div className='navigation-button'>
        <div className='navigation-button__item navigation-button__item--active'>Resources</div>
        <div className='navigation-button__item'>Requests</div>
        <div className='navigation-button__item'>Users</div>
       
      
    </div>
  )
}

export default NavigationButton


