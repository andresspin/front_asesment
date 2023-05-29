/* eslint-disable react/prop-types */
import React from 'react'
import { ProductCard } from './ProductCard';
import "./productList.scss";
import { useNavigate } from 'react-router-dom';

const ProductList = ({ list }) => {

  const navigate = useNavigate();
   
  const gotoDetails = (id) => {
    console.log("button again")
    //redirect to detail
    navigate(`/detail/${id}`)
  };
  



  return (
    <>
      <h1>Productos</h1>
      <div className="productlist">
        {list.length > 1 &&
          list.map(({id, title, image }, index) => (
            <ProductCard
              key={index}
              title={title}
              image={image}
              id={id}
              handleClick={gotoDetails}
            />
          ))}
      </div>
    </>
  );
}

export default ProductList;