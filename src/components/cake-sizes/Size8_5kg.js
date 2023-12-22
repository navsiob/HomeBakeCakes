import React, { useContext, useState } from "react";
import { ProductsContext } from "../../global/ProductsContext";
import Header from "../Header";

const Size8_5kg = () => {
  const { products } = useContext(ProductsContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [location, setLocation] = useState("");
  const [alternateNumber, setAlternateNumber] = useState("");

  const Size8_5kgCakes = products.filter((product) =>
    product.ProductSize.includes("8.5kg")
  );

  const createWhatsappMessage = (productName, productImg) => {
    const message = `I want to purchase ${productName} at size ${selectedSize} for ${selectedDate} my location at ${location} and my Alternate Number is ${alternateNumber}`;

    return `https://api.whatsapp.com/send?phone=919289008913&text=${encodeURIComponent(
      message
    )}%0A${encodeURIComponent(productImg)}`;
  };

  const handleSizeSelection = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleDateSelection = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleLocationInput = (event) => {
    setLocation(event.target.value);
  };

  const handleAlternateNumberInput = (event) => {
    setAlternateNumber(event.target.value);
  };

  return (
    <>
      <Header />
      <br />
      {Size8_5kgCakes.length !== 0 && <h1>Size 8.5 KG Cakes</h1>}
      <div className="products-container">
        {Size8_5kgCakes.length === 0 && <p>No Size 8.5 KG cakes to display</p>}
        {Size8_5kgCakes.map((product) => (
          <div className="product-card" key={product.ProductID}>
            <div className="product-img">
              <a href={product.ProductImg}>
                <img src={product.ProductImg} alt={product.ProductALT} />
              </a>
            </div>
            <div className="product-details">
              <label
                htmlFor={`cake-size-input-${product.ProductID}`}
                className="product-name"
              >
                {product.ProductName}
              </label>
              <div className="whatsapp-query">
                <p>Have query? ask with:</p>
                <a href="https://api.whatsapp.com/send?phone=919289008913">
                  <img src={require("../../images/whatsapp.png")} alt="" />
                </a>
              </div>
              <input
                type="text"
                id={`cake-size-input-${product.ProductID}`}
                placeholder="Enter Size you want"
                value={selectedSize}
                onChange={handleSizeSelection}
                className="cake-size-input"
              />
              <input
                type="date"
                placeholder="Select Date"
                value={selectedDate}
                onChange={handleDateSelection}
                className="date-input"
              />
              <input
                type="text"
                placeholder="Enter Location with landmark"
                value={location}
                onChange={handleLocationInput}
                className="location-input"
              />
              <input
                type="number"
                placeholder="Enter Alternate Number"
                max={10}
                value={alternateNumber}
                onChange={handleAlternateNumberInput}
                className="alternate-number-input"
              />
              <div className="whatsappLink">
                <a
                  href={createWhatsappMessage(
                    product.ProductName,
                    product.ProductImg
                  )}
                >
                  <button className="Whatsapp-btn">Get the Price</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Size8_5kg;
