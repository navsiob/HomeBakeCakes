import React, { useContext } from "react";
import { ProductsContext } from "../../global/ProductsContext";

const BirthdayCake = () => {
  const { products } = useContext(ProductsContext);

  // Filter products to display only those in the "Birthday Cakes" category
  const birthdayCakes = products.filter(
    (product) => product.ProductCategory === "Birthday-Cakes"
  );

  return (
    <>
      {birthdayCakes.length !== 0 && <h1>Birthday Cakes</h1>}
      <div className="products-container">
        {birthdayCakes.length === 0 && <div>No birthday cakes to display</div>}
        {birthdayCakes.map((product) => (
          <div className="product-card" key={product.ProductID}>
            <div className="product-img">
              <img src={product.ProductImg} alt={product.ProductALT} />
            </div>
            <div className="product-name">{product.ProductName}</div>
            <button className="addcart-btn">WhatsApp us</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default BirthdayCake;
