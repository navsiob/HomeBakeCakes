import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size5_5kg = () => {
  return (
    <div>
      <Header />
      <h1>5.5 KG Cakes</h1>
      <Cake category="5.5kg" />;
    </div>
  );
};

export default Size5_5kg;
