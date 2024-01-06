import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size3kg = () => {
  return (
    <div>
      <Helmet>
        <title>3 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 3 Kg cakes" />
      </Helmet>
      <Header />
      <h1>3 KG Cakes</h1>
      <Cake category="3kg" />;
    </div>
  );
};

export default Size3kg;
