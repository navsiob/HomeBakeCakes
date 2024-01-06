import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../global/ProductsContext";

const ProductDetails = ({ category }) => {
  const { products } = useContext(ProductsContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [location, setLocation] = useState("");
  const [alternateNumber, setAlternateNumber] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const results = products.filter((product) => {
      return (
        product.ProductName.toLowerCase().includes(category.toLowerCase()) ||
        product.ProductCategory.includes(category) ||
        product.ProductSize.includes(category)
      );
    });
    setFilteredProducts(results);
  }, [category, products]);

  const createWhatsappMessage = (productName, productImg) => {
    const message = `I want to purchase ${productName} at size ${selectedSize} for ${selectedDate} my location at ${location} and my Alternate Number is ${alternateNumber}`;

    return `https://api.whatsapp.com/send?phone=919205525290&text=${encodeURIComponent(
      message
    )}%0A image link:${encodeURIComponent(productImg)}`;
  };

  const handleSizeSelection = (event) => {
    if (event.target.value !== "") {
      setSelectedSize(event.target.value);
    } else {
      setSelectedSize("not sure");
    }
  };

  const handleDateSelection = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleLocationInput = (event) => {
    if (event.target.value !== "") {
      setLocation(event.target.value);
    } else {
      setLocation("Delhi");
    }
  };

  const handleAlternateNumberInput = (event) => {
    setAlternateNumber(event.target.value);
  };

  return (
    <section>
      <div className="products-container">
        {filteredProducts.length === 0 && (
          <p>No cakes to display, try different search.</p>
        )}
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.ProductID}>
            <div className="product-img">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={product.ProductImg}
              >
                <img src={product.ProductImg} alt={product.ProductALT} />
              </a>
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.ProductName}</h3>
              <div className="whatsapp-query">
                <p>Have query? ask with:</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=919205525290"
                >
                  <img src={require("../images/whatsapp.png")} alt="" />
                </a>
              </div>
              <input
                type="text"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  href={createWhatsappMessage(
                    product.ProductName,
                    product.ProductImg
                  )}
                >
                  <button className="Whatsapp-btn">Get the Price</button>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductDetails;
