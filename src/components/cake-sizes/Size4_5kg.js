import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size4_5kg = () => {
  return (
    <div>
      <Helmet>
        <title>4.5 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 4.5 Kg cakes" />
      </Helmet>
      <Header />
      <h1>4.5 KG Cakes</h1>
      <Cake category="4.5kg" />;
    </div>
  );
};

export default Size4_5kg;
