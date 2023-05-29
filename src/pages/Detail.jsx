import React from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
  const{id}= useParams();

  
  //product by id
  return (
    <div>Detail{id}</div>
  )
}

export default Detail;