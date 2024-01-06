import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size8kg = () => {
  return (
    <div>
      <Helmet>
        <title>8 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 8 Kg cakes" />
      </Helmet>
      <Header />
      <h1>8 KG Cakes</h1>
      <Cake category="8kg" />;
    </div>
  );
};

export default Size8kg;
