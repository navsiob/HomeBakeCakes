import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Size7kg = () => {
  return (
    <div>
      <Helmet>
        <title>7 Kg Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked 7 Kg cakes" />
      </Helmet>
      <Header />
      <h1>7 KG Cakes</h1>
      <Cake category="7kg" />;
    </div>
  );
};

export default Size7kg;
