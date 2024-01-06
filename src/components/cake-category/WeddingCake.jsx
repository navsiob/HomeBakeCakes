import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const WeddingCake = () => {
  return (
    <div>
      <Helmet>
        <title>Wedding Cakes by homebakecakes.shop</title>
        <meta
          name="description"
          content="Explore freshly baked Wedding cakes"
        />
      </Helmet>
      <Header />
      <h1>Wedding Cakes</h1>
      <Cake category="Wedding-Cakes" />;
    </div>
  );
};

export default WeddingCake;
