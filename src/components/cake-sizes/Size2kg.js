import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size2kg = () => {
  return (
    <div>
      <Helmet>
        <title>2 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 2 Kg cakes" />
      </Helmet>
      <Header />
      <h1>2 KG Cakes</h1>
      <Cake category="2kg" />;
    </div>
  );
};

export default Size2kg;
