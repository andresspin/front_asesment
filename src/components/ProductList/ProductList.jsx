/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { ProductCard } from './ProductCard';
import "./productList.scss";
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context';

const ProductList = ({ list }) => {

  const navigate = useNavigate();
  const context = useContext(Context);
  const {redirectDetailsRoute} = context;
   
  console.log("Detail content...",context)

  const gotoDetails = (id) => {
   // console.log("button again",context)
    //redirect to detail
    navigate(`${redirectDetailsRoute}/${id}`);
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