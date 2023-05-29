import React,{useEffect, useState,useContext} from "react";
//import useProductData from "../hooks/useProductData";
//import {ProductCard} from "../components/ProductCard";
import { ProductList } from "../components/ProductList";
import { Context  } from "../context";  

export const Home = () => {
  const [products, setProducts] = useState([]);

  const context = useContext(Context);
  console.log("**********",context)
  

  // CONSUMIR API CON ASYNC AWAIT
  const getAllProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    try {
      const request = await fetch(url);
      const data = await request.json();
      setProducts(data)
      console.log(data);
      return data.data;
    } catch (error) {
      return error;
    }
  };

  //renderizar
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
    <ProductList list = {products}></ProductList>
    </>
  );
}


export default Home;
