import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size10_5kg = () => {
  return (
    <div>
      <Header />
      <h1>10.5 KG Cakes</h1>
      <Cake category="10.5kg" />;
    </div>
  );
};

export default Size10_5kg;
