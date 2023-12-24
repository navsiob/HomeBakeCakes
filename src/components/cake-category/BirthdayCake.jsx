import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const BirthdayCake = () => {
  return (
    <div>
      <Header />
      <h1>Birthday Cakes</h1>
      <Cake category="Birthday-Cakes" />;
    </div>
  );
};

export default BirthdayCake;
