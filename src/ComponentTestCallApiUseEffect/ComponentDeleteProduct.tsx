import { useState } from "react";

const ComponentDeleteProduct = () => {
  const [productId, setProductId] = useState<number>(0);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://dummyjson.com/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(`Delete product success: ${JSON.stringify(data)}`);
      });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>Delete Product</h1>
        <label htmlFor="">Product ID:</label>
        <input
          type="number"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(Number(e.target.value))}
        />
        <button type="submit">Delete Product</button>
      </form>
    </div>
  );
};

export default ComponentDeleteProduct;
