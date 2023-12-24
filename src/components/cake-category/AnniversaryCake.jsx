import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const AnniversaryCake = () => {
  return (
    <div>
      <Header />
      <h1>Anniversary Cakes</h1>
      <Cake category="Anniversary-Cakes" />;
    </div>
  );
};

export default AnniversaryCake;
