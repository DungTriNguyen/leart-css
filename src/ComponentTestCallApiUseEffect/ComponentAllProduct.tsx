import { useEffect, useState } from "react";
import { Product } from "./type";

const ComponentAllProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  // Could be GET or POST/PUT/PATCH/DELETE
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      // .then(console.log)
      .then((data) => setProducts(data.products));
  }, []);
  /* { status: 'ok', method: 'GET' } */
  return (
    <>
      <span>----------------------------------------------</span>
      {products.map((product) => {
        return (
          <ul key={product.id}>
            <h1>product so:{product.id}</h1>
            <span>name:{product.title}</span>
            <p>title:{product.title}</p>
            <p>description:{product.description}</p>
          </ul>
        );
      })}
    </>
  );
};

export default ComponentAllProduct;
