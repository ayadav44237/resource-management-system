import React from 'react';
import "./index.css";

const Card = ({item}) => {
  return (
    <div className='card'>
      <div className='card__header'>
        <div className='card__header--logo'>
          <img src={item.icon_url} alt={item.title} />
        </div>
        <div className='card__header--desc'>
          <div className='card__header--title'>{item.title}</div>
          <div className='card__header--category'>{item.category}</div>
        </div>
      </div>
      <div className='card__details'>
        <a className='card__details--link' href={item.link}>
          {item.link}
        </a>
        <div className='card__details--desc'>
          {item.description}
        </div>
      </div>
    </div>
  )
}

export default Card;
