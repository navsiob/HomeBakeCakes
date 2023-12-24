import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const CustomizedChocolate = () => {
  return (
    <div>
      <Header />
      <h1>Customized Chocolate</h1>
      <Cake category="customized-chocolate" />;
    </div>
  );
};

export default CustomizedChocolate;
