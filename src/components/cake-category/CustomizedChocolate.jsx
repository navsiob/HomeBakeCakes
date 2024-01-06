import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const CustomizedChocolate = () => {
  return (
    <div>
      <Helmet>
        <title>Customized Chocolate by homebakecakes.shop</title>
        <meta
          name="description"
          content="Explore freshly baked Customized Chocolate"
        />
      </Helmet>
      <Header />
      <h1>Customized Chocolate</h1>
      <Cake category="customized-chocolate" />;
    </div>
  );
};

export default CustomizedChocolate;
