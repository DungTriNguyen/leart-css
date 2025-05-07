const ComponentUpdatePATChProduct = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("https://dummyjson.com/products/5", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "iPhone Galaxy +1",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(`Update product success:${JSON.stringify(data)}`);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">PATCH product</button>
      </form>
    </div>
  );
};

export default ComponentUpdatePATChProduct;
