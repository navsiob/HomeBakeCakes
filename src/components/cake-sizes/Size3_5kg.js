import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size3_5kg = () => {
  return (
    <div>
      <Helmet>
        <title>3.5 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 3.5 Kg cakes" />
      </Helmet>
      <Header />
      <h1>3.5 KG Cakes</h1>
      <Cake category="3.5kg" />;
    </div>
  );
};

export default Size3_5kg;
