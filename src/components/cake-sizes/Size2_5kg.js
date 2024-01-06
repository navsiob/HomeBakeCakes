import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size2_5kg = () => {
  return (
    <div>
      <Helmet>
        <title>2.5 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 2.5 Kg cakes" />
      </Helmet>
      <Header />
      <h1>2.5 KG Cakes</h1>
      <Cake category="2.5kg" />;
    </div>
  );
};

export default Size2_5kg;
