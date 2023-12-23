import React from "react";
import { Outlet, Link } from "react-router-dom";

const Catigory = () => {
  return (
    <main>
      <div id="introduction">
        <h1>Online Cake Delivery In Delhi</h1>
        <p>
          Home Bake Cakes is all about those delicious
          <strong> home-made cakes</strong>, made with lots of love! When you
          order from us, we hook you up with fantastic <em>local bakers</em> who
          bake the yummiest and <strong> freshest cakes</strong>. And the best
          part is you can now grab a <strong>custom-made cake</strong> online!
          Celebrate your special moments with friends and family, all while we
          make sure everything is super <strong>clean and hygienic</strong>!
        </p>
      </div>
      <div id="category">
        <h2>Choose Your Occasion</h2>
        <div id="Birthday-Cakes">
          <Link to="Birthday">
            <img src={require("../images/birthday cake.jpeg")} alt="" />
            <h3>Birthday Cakes</h3>
          </Link>
        </div>
        <div id="Anniversary-Cakes">
          <Link to="Anniversary">
            <img src={require("../images/anniversary cake.jpeg")} alt="" />
            <h3>Anniversary Cakes</h3>
          </Link>
        </div>
        <div id="Kids-Cakes">
          <Link to="Kids">
            <img src={require("../images/kids cake.jpeg")} alt="" />
            <h3>Kids Cakes</h3>
          </Link>
        </div>
        <div id="Baby-Shower-Cakes">
          <Link to="Baby-Shower">
            <img src={require("../images/baby shower.jpeg")} alt="" />
            <h3>Baby Shower Cakes</h3>
          </Link>
        </div>
        <div id="Sugar-Free-Cakes">
          <Link to="Sugar-Free">
            <img src={require("../images/sugar free cake.jpeg")} alt="" />
            <h3>Sugar Free Cakes</h3>
          </Link>
        </div>
        <div id="Cup-Cakes">
          <Link to="Cup">
            <img src={require("../images/cup cake.jpeg")} alt="" />
            <h3>Cup Cakes</h3>
          </Link>
        </div>
        <div id="Engagement-Cakes">
          <Link to="Engagement">
            <img src={require("../images/engagement cake.jpeg")} alt="" />
            <h3>Engagement Cakes</h3>
          </Link>
        </div>
        <div id="Heart-Shaped-Cakes">
          <Link to="Heart-Shaped">
            <img src={require("../images/heart shaped cake.jpeg")} alt="" />
            <h3>Heart Shaped Cakes</h3>
          </Link>
        </div>
        <div id="Theme-Cakes">
          <Link to="Theme">
            <img src={require("../images/theme cake.jpeg")} alt="" />
            <h3>Theme Cakes</h3>
          </Link>
        </div>
        <div id="6-Month-Birthday-Cakes">
          <Link to="6-Months">
            <img src={require("../images/6 month.jpeg")} alt="" />
            <h3>Six Month Birthday Cakes</h3>
          </Link>
        </div>
        <div id="Valentines-Day-Cakes">
          <Link to="Valentines">
            <img src={require("../images/valentine cake.jpg")} alt="" />
            <h3>Valentines Day Cakes</h3>
          </Link>
        </div>
        <div id="Wedding-Cakes">
          <Link to="Wedding">
            <img src={require("../images/wedding Cake.jpg")} alt="" />
            <h3>Wedding Cakes</h3>
          </Link>
        </div>
        <div id="custumized-chocolate">
          <Link to="Chocolates">
            <img src={require("../images/customize chocolate.jpg")} alt="" />
            <h3>Customized Chocolate</h3>
          </Link>
        </div>
      </div>
      <div id="why-us">
        <p>Why Martian Treats?</p>
        <img src={require("../images/homemade.jpg")} alt="" />
        <img src={require("../images/fresh.jpeg")} alt="" />
        <img src={require("../images/Hygiene.jpeg")} alt="" />
      </div>
      <div id="cake-size">
        <h2>Choose your size</h2>
        <ul>
          <li>
            <Link to="250g">250 gram cake</Link>
          </li>
          <li>
            <Link to="500g">500 gram cake</Link>
          </li>
          <li>
            <Link to="1kg">1 kg cake</Link>
          </li>
          <li>
            <Link to="1.5kg">1.5 kg cake</Link>
          </li>
          <li>
            <Link to="2kg">2 kg cake</Link>
          </li>
          <li>
            <Link to="2.5kg">2.5 kg cake</Link>
          </li>
          <li>
            <Link to="3kg">3 kg cake</Link>
          </li>
          <li>
            <Link to="3.5kg">3.5 kg cake</Link>
          </li>
          <li>
            <Link to="4kg">4 kg cake</Link>
          </li>
          <li>
            <Link to="4.5kg">4.5 kg cake</Link>
          </li>
          <li>
            <Link to="5kg">5 kg cake</Link>
          </li>
          <li>
            <Link to="5.5kg">5.5 kg cake</Link>
          </li>
          <li>
            <Link to="6kg">6 kg cake</Link>
          </li>
          <li>
            <Link to="6.5kg">6.5 kg cake</Link>
          </li>
          <li>
            <Link to="7kg">7 kg cake</Link>
          </li>
          <li>
            <Link to="7.5kg">7.5 kg cake</Link>
          </li>
          <li>
            <Link to="8kg">8 kg cake</Link>
          </li>
          <li>
            <Link to="8.5kg">8.5 kg cake</Link>
          </li>
          <li>
            <Link to="9kg">9 kg cake</Link>
          </li>
          <li>
            <Link to="9.5kg">9.5 kg cake</Link>
          </li>
          <li>
            <Link to="10kg">10 kg cake</Link>
          </li>
          <li>
            <Link to="10.5kg">10.5 kg cake</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};

export default Catigory;
