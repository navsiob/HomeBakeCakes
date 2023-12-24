import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const CupCake = () => {
  return (
    <div>
      <Header />
      <h1>Cup Cakes</h1>
      <Cake category="Cup-Cakes" />;
    </div>
  );
};

export default CupCake;
