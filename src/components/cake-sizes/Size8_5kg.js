import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size8_5kg = () => {
  return (
    <div>
      <Helmet>
        <title>8.5 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 8.5 Kg cakes" />
      </Helmet>
      <Header />
      <h1>8.5 KG Cakes</h1>
      <Cake category="8.5kg" />;
    </div>
  );
};

export default Size8_5kg;
