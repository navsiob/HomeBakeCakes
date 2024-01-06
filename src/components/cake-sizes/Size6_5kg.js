import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size6_5kg = () => {
  return (
    <div>
      <Helmet>
        <title>6.5 kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 6.5 kg cakes" />
      </Helmet>
      <Header />
      <h1>6.5 KG Cakes</h1>
      <Cake category="6.5kg" />;
    </div>
  );
};

export default Size6_5kg;
