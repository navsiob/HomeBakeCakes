import React, { useContext, useState } from "react";
import { ProductsContext } from "../global/ProductsContext";
import Cake from "./ProductDetails";

const Header = () => {
  const { products } = useContext(ProductsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    setShowSearchResults(true);
  };

  return (
    <div id="header">
      <img id="logo" src={require("../images/logo.png")} alt="" />
      <div id="contact-search">
        <div id="contact-follow">
          <p>
            Call us at<a href="tell:9205525290">9205525290</a>
          </p>
          <p>Follow us on:</p>
          <a href="https://facebook.com">
            <img src={require("../images/Facebook_Logo_2023.png")} alt="" />
          </a>
          <a href="https://instagram.com">
            <img src={require("../images/instagram logo.avif")} alt="" />
          </a>
        </div>
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
      </div>
      {showSearchResults && <Cake category={searchTerm} />}
    </div>
  );
};

export default Header;
