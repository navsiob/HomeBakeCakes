import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size7_5kg = () => {
  return (
    <div>
      <Helmet>
        <title>7.5 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 7.5 Kg cakes" />
      </Helmet>
      <Header />
      <h1>7.5 KG Cakes</h1>
      <Cake category="7.5kg" />;
    </div>
  );
};

export default Size7_5kg;
