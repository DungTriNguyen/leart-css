import { useState } from "react";

const ComponentUpdatePUTProduct = () => {
  const [productId, setProductId] = useState<number>(5);
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://dummyjson.com/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: title,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(`Update product success: ${JSON.stringify(data)}`);
      });
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productId">Product ID:</label>
          <input
            type="number"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default ComponentUpdatePUTProduct;
