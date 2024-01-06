import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size5_5kg = () => {
  return (
    <div>
      <Helmet>
        <title>5.5 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 5.5 Kg cakes" />
      </Helmet>
      <Header />
      <h1>5.5 KG Cakes</h1>
      <Cake category="5.5kg" />;
    </div>
  );
};

export default Size5_5kg;
