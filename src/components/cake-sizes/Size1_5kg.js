import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size1_5kg = () => {
  return (
    <div>
      <Helmet>
        <title>1.5 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 1.5 Kg cakes" />
      </Helmet>
      <Header />
      <h1>1.5 KG Cakes</h1>
      <Cake category="1.5kg" />;
    </div>
  );
};

export default Size1_5kg;
