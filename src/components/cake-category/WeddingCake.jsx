import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const WeddingCake = () => {
  return (
    <div>
      <Header />
      <h1>Wedding Cakes</h1>
      <Cake category="Wedding-Cakes" />;
    </div>
  );
};

export default WeddingCake;
