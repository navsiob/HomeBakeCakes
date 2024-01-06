import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size4kg = () => {
  return (
    <div>
      <Helmet>
        <title>4 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 4 Kg cakes" />
      </Helmet>
      <Header />
      <h1>4 KG Cakes</h1>
      <Cake category="4kg" />;
    </div>
  );
};

export default Size4kg;
