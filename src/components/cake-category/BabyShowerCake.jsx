import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const BabyShowerCake = () => {
  return (
    <div>
      <Helmet>
        <title>Baby Shower Cakes by homebakecakes.shop</title>
        <meta
          name="description"
          content="Explore freshly baked Baby Shower cakes"
        />
      </Helmet>
      <Header />
      <h1>Baby Shower Cakes</h1>
      <Cake category="Baby-Shower-Cakes" />;
    </div>
  );
};

export default BabyShowerCake;
