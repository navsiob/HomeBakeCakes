import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const HeartShapedCake = () => {
  return (
    <div>
      <Helmet>
        <title>Heart Shaped Cakes by homebakecakes.shop</title>
        <meta
          name="description"
          content="Explore freshly baked Heart Shaped cakes"
        />
      </Helmet>
      <Header />
      <h1>Heart Shaped Cakes</h1>
      <Cake category="Heart-Shaped-Cakes" />;
    </div>
  );
};

export default HeartShapedCake;
