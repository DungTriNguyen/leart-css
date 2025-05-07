import { useEffect, useState } from "react";
import { ProductCategory } from "./type";

const ComponentGetProductCategory = () => {
  const [productCategory, setProductCategory] = useState<ProductCategory[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setProductCategory(data));
  }, []);
  return (
    <div>
      <span>----------------------------------------------</span>
      {productCategory.map((categories) => {
        return (
          <ul key={categories.slug}>
            <span>name:{categories.name}</span>
            <span>description:{categories.url}</span>
          </ul>
        );
      })}
    </div>
  );
};

export default ComponentGetProductCategory;
