import React, { useContext, useState } from "react";
import { ProductsContext } from "../global/ProductsContext";

const Header = () => {
  const { products } = useContext(ProductsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [location, setLocation] = useState("");
  const [alternateNumber, setAlternateNumber] = useState("");
  // Function to handle form submission
  const handleSearch = (e) => {
    e.preventDefault();

    // Perform search logic here
    const results = products.filter((productName) =>
      productName.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };
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
    <div id="header">
      <img id="logo" src={require("../images/logo.png")} alt="" />
      <div id="contact-search">
        <div id="contact-follow">
          <p>
            Call us at<a href="tell:8130206964">8130206964</a>
          </p>
          <p>Follow us on:</p>
          <a href="https://facebook.com">
            <img src={require("../images/Facebook_Logo_2023.png")} alt="" />
          </a>
          <a href="https://instagram.com">
            <img src={require("../images/instagram logo.avif")} alt="" />
          </a>
        </div>{" "}
        <div id="search">
          <form onSubmit={handleSearch}>
            <label htmlFor="header-search">
              {products.length}+ Cakes Designs (still counting)
            </label>
            <input
              type="search"
              name="search"
              id="header-search"
              placeholder="Search cakes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        {/* Display search results if any */}
        {searchResults.length !== 0 && (
          <h1>Search Results: ({searchResults.length})</h1>
        )}
        <div className="products-container">
          {searchResults.map((product) => (
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
                    <img src={require("../images/whatsapp.png")} alt="" />
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
      </div>
    </div>
  );
};

export default Header;
