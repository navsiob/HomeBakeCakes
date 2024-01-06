import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size10kg = () => {
  return (
    <div>
      <Helmet>
        <title>10 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 10 Kg cakes" />
      </Helmet>
      <Header />
      <h1>10 KG Cakes</h1>
      <Cake category="10kg" />;
    </div>
  );
};

export default Size10kg;
