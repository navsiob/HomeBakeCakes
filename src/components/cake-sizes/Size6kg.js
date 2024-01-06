import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size6kg = () => {
  return (
    <div>
      <Helmet>
        <title>6 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 6 Kg cakes" />
      </Helmet>
      <Header />
      <h1>6 KG Cakes</h1>
      <Cake category="6kg" />;
    </div>
  );
};

export default Size6kg;
