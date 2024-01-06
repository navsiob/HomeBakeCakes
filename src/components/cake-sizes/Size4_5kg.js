import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Sized4_5kg = () => {
  return (
    <div>
      <Helmet>
        <title>4.5 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 4.5 Kg cakes" />
      </Helmet>
      <Header />
      <h1>d4.5 KG Cakes</h1>
      <Cake category="d4.5kg" />;
    </div>
  );
};

export default Sized4_5kg;
