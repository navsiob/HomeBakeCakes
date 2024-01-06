import React, { useContext, useState } from "react";
import { ProductsContext } from "../global/ProductsContext";
import Cake from "./ProductDetails";
import { Link } from "react-router-dom";

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
      <div id="heading">
        <hr />
        <Link to="/">
          <h1>HOME BAKE CAKES</h1>
        </Link>
        <hr />
        <p>{products.length}+ Cakes Designs (still counting)</p>
      </div>

      <nav>
        <ul id="contact">
          <li>
            <a href="tel:9205525290">Call us 9205525290</a>
          </li>
          <li>
            <p>Follow us:</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com"
            >
              <img
                src={require("../images/Facebook_Logo_2023.png")}
                alt="Facebook"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/homebake.cakes"
            >
              <img
                src={require("../images/instagram logo.avif")}
                alt="Instagram"
              />
            </a>
          </li>
        </ul>
      </nav>
      <div id="search">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            name="search"
            id="search-input"
            placeholder="Search cakes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {showSearchResults && (
        <section>
          <br />
          <h1>Search Results: </h1>
          <Cake category={searchTerm} />
        </section>
      )}
    </div>
  );
};

export default Header;
