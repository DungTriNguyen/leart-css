import { useState } from "react";
import { Product } from "./type";

const ComponentAddNewProduct = () => {
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    description: "",
    price: 0,
  });
  //   useEffect(() => {});
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then(console.log)
      .then((data) => {
        console.log(data);
        alert(`Add product success: `);
        // alert(`Add product success: ${JSON.stringify(data.product)}`);
      });
  };
  return (
    <div>
      <h1>Add new product</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: +e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="">Discription</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ComponentAddNewProduct;
