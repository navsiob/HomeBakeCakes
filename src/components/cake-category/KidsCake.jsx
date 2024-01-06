import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const KidsCake = () => {
  return (
    <div>
      <Helmet>
        <title>Kids Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked Kids cakes" />
      </Helmet>
      <Header />
      <h1>Kids Cakes</h1>
      <Cake category="Kids-Cakes" />;
    </div>
  );
};

export default KidsCake;
