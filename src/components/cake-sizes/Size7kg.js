import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const Size7kg = () => {
  return (
    <div>
      <Header />
      <h1>7 KG Cakes</h1>
      <Cake category="7kg" />;
    </div>
  );
};

export default Size7kg;
