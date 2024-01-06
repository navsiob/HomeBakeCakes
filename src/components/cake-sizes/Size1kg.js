import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size1kg = () => {
  return (
    <div>
      <Helmet>
        <title>1 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 1 Kg cakes" />
      </Helmet>
      <Header />
      <h1>1 KG Cakes</h1>
      <Cake category="1kg" />;
    </div>
  );
};

export default Size1kg;
