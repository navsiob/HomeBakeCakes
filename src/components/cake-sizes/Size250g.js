import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size250g = () => {
  return (
    <div>
      <Helmet>
        <title>250 gram Cakes by homebakecakes.shop</title>
        <meta
          name="description"
          content="Explore freshly baked 250 gram cakes"
        />
      </Helmet>
      <Header />
      <h1>250 Grams Cakes</h1>
      <Cake category="250g" />;
    </div>
  );
};

export default Size250g;
