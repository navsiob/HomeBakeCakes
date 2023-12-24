import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";

const EngagementCake = () => {
  return (
    <div>
      <Header />
      <h1>Engagement Cakes</h1>
      <Cake category="Engagement-Cakes" />;
    </div>
  );
};

export default EngagementCake;
