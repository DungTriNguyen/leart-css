import { useEffect, useState } from "react";
import { Product } from "./type";

const ComponentGetProductID = ({ getProductId }: { getProductId: number }) => {
  const [productid, setProductid] = useState<Product>();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${getProductId}`)
      .then((res) => res.json())
      .then((data) => setProductid(data));
  }, [getProductId]);
  return (
    <>
      <span>----------------------------------------------</span>
      <title>{productid?.id}</title>
      <h1>{productid?.title}</h1>
      <h2>{productid?.description}</h2>
    </>
  );
};

export default ComponentGetProductID;
