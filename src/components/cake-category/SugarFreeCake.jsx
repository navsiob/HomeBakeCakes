import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const SugarFreeCake = () => {
  return (
    <div>
      <Header />
      <h1>Sugar Free Cakes</h1>
      <Cake category="Sugar-Free-Cakes" />;
    </div>
  );
};

export default SugarFreeCake;
