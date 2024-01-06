import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const ValentinesDayCake = () => {
  return (
    <div>
      <Helmet>
        <title>Valentines Day Cakes by homebakecakes.shop</title>
        <meta
          name="description"
          content="Explore freshly baked Valentines Day cakes"
        />
      </Helmet>
      <Header />
      <h1>Valentines Day Cakes</h1>
      <Cake category="Valentines-Day-Cakes" />;
    </div>
  );
};

export default ValentinesDayCake;
