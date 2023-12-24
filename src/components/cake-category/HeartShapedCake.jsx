import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const HeartShapedCake = () => {
  return (
    <div>
      <Header />
      <h1>Heart Shaped Cakes</h1>
      <Cake category="Heart-Shaped-Cakes" />;
    </div>
  );
};

export default HeartShapedCake;
