import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size9kg = () => {
  return (
    <div>
      <Helmet>
        <title>9 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 9 Kg cakes" />
      </Helmet>
      <Header />
      <h1>9 KG Cakes</h1>
      <Cake category="9kg" />;
    </div>
  );
};

export default Size9kg;
