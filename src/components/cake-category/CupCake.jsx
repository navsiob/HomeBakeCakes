import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const CupCake = () => {
  return (
    <div>
      <Helmet>
        <title>Cup Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked Cup cakes" />
      </Helmet>
      <Header />
      <h1>Cup Cakes</h1>
      <Cake category="Cup-Cakes" />;
    </div>
  );
};

export default CupCake;
