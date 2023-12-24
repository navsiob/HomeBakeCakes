import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size2_5kg = () => {
  return (
    <div>
      <Header />
      <h1>2.5 KG Cakes</h1>
      <Cake category="2.5kg" />;
    </div>
  );
};

export default Size2_5kg;
