import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size1_5kg = () => {
  return (
    <div>
      <Header />
      <h1>1.5 KG Cakes</h1>
      <Cake category="1.5kg" />;
    </div>
  );
};

export default Size1_5kg;
