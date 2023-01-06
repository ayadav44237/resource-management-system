import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card';
import "./index.css";
import Pagination from './Pagination';

const Resources = () => {
  const resources = useSelector(store => store.resources);

  return (
    <>
      {
        resources && <Pagination items={resources} />
      }
    </>
  )
}

export default Resources
