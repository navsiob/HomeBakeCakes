import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const AnniversaryCake = () => {
  return (
    <div>
      <Helmet>
        <title>Anniversary Cakes by homebakecakes.shop</title>
        <meta
          name="description"
          content="Explore freshly baked Anniversary cakes"
        />
      </Helmet>
      <Header />
      <h1>Anniversary Cakes</h1>
      <Cake category="Anniversary-Cakes" />;
    </div>
  );
};

export default AnniversaryCake;
