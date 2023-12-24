import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const KidsCake = () => {
  return (
    <div>
      <Header />
      <h1>Kids Cakes</h1>
      <Cake category="Kids-Cakes" />;
    </div>
  );
};

export default KidsCake;
