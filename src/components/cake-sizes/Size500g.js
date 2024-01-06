import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size500g = () => {
  return (
    <div>
      <Helmet>
        <title>500 gram Cakes by homebakecakes.shop</title>
        <meta
          name="description"
          content="Explore freshly baked 500 gram cakes"
        />
      </Helmet>
      <Header />
      <h1>500 Grams Cakes</h1>
      <Cake category="500g" />;
    </div>
  );
};

export default Size500g;
