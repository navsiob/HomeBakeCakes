import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const ValentinesDayCake = () => {
  return (
    <div>
      <Header />
      <h1>Valentines Day Cakes</h1>
      <Cake category="Valentines-Day-Cakes" />;
    </div>
  );
};

export default ValentinesDayCake;
