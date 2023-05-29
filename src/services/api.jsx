

 const getProducts = async () => {
   const url = "https://api.storerestapi.com/products";
   try {
     const request = await fetch(url);
     const data = await request.json();
     console.log(data.data);
     return data.data;
   } catch (error) {
     return error;
   }
 };

export default getProducts;




// CONSUMIR API CON SOLO PROMISES
  // const getAllProducts =() => {
  //   const url = "https://api.storerestapi.com/products";
  //   fetch(url)
  //     //resolved promise
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data.data)
  //       console.log("Data: ", data.data, "ahora");
  //     })
  //     //rejected
  //     .catch((error) => {
  //       console.log("Error:", error);
  //     });
  // };