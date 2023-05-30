
import React ,{useContext,useEffect,useState}from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../context';

const Detail = () => {
  const [product, setProduct] = useState({})
  const{id:idParam}= useParams();
  const context = useContext(Context);
  const {store} = context||{};// destructuracion para acceder a la propiedad de context
  const {products}= store||[];//destructuracion para acceder al vector de store en el context
  //un estado que almacena producto

  useEffect(()=>{
    // console.log("prod..", products);
    // console.log("idParam",idParam)
    const item = products.filter((item) => item.id === +idParam)
    setProduct(item[0])
    console.log("data...",product)
  },[])

  //product by id
  return (
    <div>
      {idParam}
      <strong>Id:</strong>
      {product.id}
      <strong>Price:</strong>${product.price}
      <strong>Description:</strong>
      {product.description}
      <strong>Category:</strong>
      {product.category}
      <img src={product.image} alt="" />
    </div>
  );
}

export default Detail;