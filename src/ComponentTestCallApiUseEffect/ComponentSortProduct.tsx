import { useEffect, useState } from "react";
import { Product } from "./type";

const ComponentSortProduct = () => {
  const [dataSort, setDataSort] = useState<Product[]>([]);
  const conditionSort = "price";
  useEffect(() => {
    fetch(`https://dummyjson.com/products?sortBy=${conditionSort}&order=desc`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDataSort(data.products);
      });
  }, [conditionSort]);
  return (
    <>
      <span>--------------------------</span>
      {dataSort.map((items) => (
        <ul key={items.id}>
          <h1>product so:{items.id}</h1>
          <span>name:{items.title}</span>
          <p>description:{items.description}</p>
          <p>description:{items.price}</p>
        </ul>
      ))}
    </>
  );
};

export default ComponentSortProduct;
