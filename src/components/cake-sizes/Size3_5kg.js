import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size3_5kg = () => {
  return (
    <div>
      <Header />
      <h1>3.5 KG Cakes</h1>
      <Cake category="3.5kg" />;
    </div>
  );
};

export default Size3_5kg;
