import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const ThemeCake = () => {
  return (
    <div>
      <Helmet>
        <title>Theme Cakes by homebakecakes.shop</title>
        <meta name="description" content="Explore freshly baked Theme cakes" />
      </Helmet>
      <Header />
      <h1>Theme Cakes</h1>
      <Cake category="Theme-Cakes" />;
    </div>
  );
};

export default ThemeCake;
