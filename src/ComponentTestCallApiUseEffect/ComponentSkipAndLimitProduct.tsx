import { useEffect, useState } from "react";
import { Product } from "./type";

const ComponentSkipAndLimitProduct = () => {
  const [listData, setListData] = useState<Product[]>([]);
  const limitPage = 10;
  const [page, setPage] = useState(1); // Default page
  const [totalItems, setTotalItems] = useState(0); // Total number of items

  useEffect(() => {
    // Fetch total number of items
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setTotalItems(data.total);
      });
  }, [page]);

  useEffect(() => {
    const skip = (page - 1) * limitPage;
    fetch(
      `https://dummyjson.com/products?limit=${limitPage}&skip=${skip}&select=title,price`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setListData(data.products);
      });
  }, [page]); // Refetch data when limit or page changes

  const handlePrevious = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1)); // Ensure page doesn't go below 1
  };

  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages)); // Ensure page doesn't go beyond totalPages
  };

  const totalPages = Math.ceil(totalItems / limitPage);

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const renderPageButtons = () => {
    const buttons = [];
    const maxButtons = 5;

    if (totalPages <= maxButtons * 2) {
      // If total pages are less than or equal to 10, show all buttons
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            disabled={i === page}
          >
            {i}
          </button>
        );
      }
    } else {
      // Show first 5 buttons
      for (let i = 1; i <= maxButtons; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            disabled={i === page}
          >
            {i}
          </button>
        );
      }

      // Show "..." if current page is greater than 6
      if (page > maxButtons + 1) {
        buttons.push(<span key="start-ellipsis">...</span>);
      }

      // Show middle button if current page is between 6 and totalPages - 5
      if (page > maxButtons && page <= totalPages - maxButtons) {
        buttons.push(
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            disabled={true}
          >
            {page}
          </button>
        );
      }

      // Show "..." if current page is less than totalPages - 5
      if (page < totalPages - maxButtons) {
        buttons.push(<span key="end-ellipsis">...</span>);
      }

      // Show last 5 buttons
      for (let i = totalPages - maxButtons + 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            disabled={i === page}
          >
            {i}
          </button>
        );
      }
    }

    return buttons;
  };

  return (
    <div>
      <span>----------------------------------------------</span>
      {listData.map((product) => {
        return (
          <ul key={product.id}>
            <h1>product so:{product.id}</h1>
            <span>name:{product.title}</span>
            <p>price:{product.price}</p>
          </ul>
        );
      })}
      <button onClick={handlePrevious} disabled={page === 1}>
        previous
      </button>
      {renderPageButtons()}
      <button onClick={handleNext} disabled={page === totalPages}>
        next
      </button>
      <p>
        Page: {page} / {totalPages}
      </p>
    </div>
  );
};

export default ComponentSkipAndLimitProduct;
