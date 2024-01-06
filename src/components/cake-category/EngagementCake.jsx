import React from "react";
import Cake from "../ProductDetails";
import Header from "../Header";
import { Helmet } from "react-helmet";

const EngagementCake = () => {
  return (
    <div>
      <Helmet>
        <title>Engagement Cakes by homebakecakes.shop</title>
        <meta
          name="description"
          content="Explore freshly baked Engagement cakes"
        />
      </Helmet>
      <Header />
      <h1>Engagement Cakes</h1>
      <Cake category="Engagement-Cakes" />;
    </div>
  );
};

export default EngagementCake;
