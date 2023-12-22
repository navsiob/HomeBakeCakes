import React, { useContext, useState } from "react";
import { ProductsContext } from "../../global/ProductsContext";
import Header from "../Header";

const BirthdayCake = () => {
  const { products } = useContext(ProductsContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [location, setLocation] = useState("");
  const [alternateNumber, setAlternateNumber] = useState("");

  const birthdayCakes = products.filter((product) =>
    product.ProductCategory.includes("Birthday-Cakes")
  );
  console.log(products);
  const createWhatsappMessage = (productName, productImg) => {
    const message = `I want to purchase ${productName} at size ${selectedSize} for ${selectedDate} my location at ${location} and my Alternate Number is ${alternateNumber}`;

    return `https://api.whatsapp.com/send?phone=919289008913&text=${encodeURIComponent(
      productImg
    )}%0A${encodeURIComponent(message)}`;
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
      {birthdayCakes.length !== 0 && <h1>Birthday Cakes</h1>}
      <div className="products-container">
        {birthdayCakes.length === 0 && <p>No birthday cakes to display</p>}
        {birthdayCakes.map((product) => (
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

export default BirthdayCake;
