import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const BirthdayCake = () => {
  return (
    <div>
      <Helmet>
        <title>Birthday Cakes by homebakecakes.shop</title>
        <meta
          name="description"
          content="Explore freshly baked Birthday cakes"
        />
      </Helmet>
      <Header />
      <h1>Birthday Cakes</h1>
      <Cake category="Birthday-Cakes" />;
    </div>
  );
};

export default BirthdayCake;
