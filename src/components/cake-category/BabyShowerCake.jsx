import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const BabyShowerCake = () => {
  return (
    <div>
      <Header />
      <h1>Baby Shower Cakes</h1>
      <Cake category="Baby-Shower-Cakes" />;
    </div>
  );
};

export default BabyShowerCake;
