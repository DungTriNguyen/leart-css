import { useEffect, useState } from "react";
import { Product } from "./type";

const ComponentSearchProduct = () => {
  const [data, setData] = useState("");
  const [listData, setListData] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${data}`)
      .then((res) => res.json())
      // .then(console.log);
      .then((data) => setListData(data.products));
  }, [data]);
  return (
    <div>
      <span>----------------------------------------------</span>
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="nhap thong tin tim kiem"
      />

      {listData.map((product) => {
        return (
          <ul key={product.id}>
            <h1>product so:{product.id}</h1>
            <span>name:{product.title}</span>
            <p>description:{product.description}</p>
          </ul>
        );
      })}
    </div>
  );
};

export default ComponentSearchProduct;
