import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const SixMonthCake = () => {
  return (
    <div>
      <Header />
      <h1>Six Month Birthday Cakes</h1>
      <Cake category="6-Month-Birthday-Cakes" />;
    </div>
  );
};

export default SixMonthCake;
