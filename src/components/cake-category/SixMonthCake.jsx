import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const SixMonthCake = () => {
  return (
    <div>
      <Helmet>
        <title>Six Month Birthday Cakes by homebakecakes.shop</title>
        <meta
          name="description"
          content="Explore freshly baked Six Month Birthday cakes"
        />
      </Helmet>
      <Header />
      <h1>Six Month Birthday Cakes</h1>
      <Cake category="6-Month-Birthday-Cakes" />;
    </div>
  );
};

export default SixMonthCake;
