import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

const Catigory = () => {
  return (
    <main>
      <Header />
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
        <h2>
          Choose Your Occasion or <a href="#cake-size">Cake Size</a>
        </h2>
        <div id="Birthday-Cakes">
          <Link to="Birthday">
            <img
              src={require("../images/birthday cake.jpeg")}
              alt="Birthday Cakes"
            />
            <h3>Birthday Cakes</h3>
          </Link>
        </div>
        <div id="Anniversary-Cakes">
          <Link to="Anniversary">
            <img
              src={require("../images/anniversary cake.jpeg")}
              alt="Anniversary Cakes"
            />
            <h3>Anniversary Cakes</h3>
          </Link>
        </div>
        <div id="Kids-Cakes">
          <Link to="Kids">
            <img src={require("../images/kids cake.jpeg")} alt="Kids Cakes" />
            <h3>Kids Cakes</h3>
          </Link>
        </div>
        <div id="Baby-Shower-Cakes">
          <Link to="Baby-Shower">
            <img
              src={require("../images/baby shower.jpeg")}
              alt="Baby Shower Cakes"
            />
            <h3>Baby Shower Cakes</h3>
          </Link>
        </div>
        <div id="Sugar-Free-Cakes">
          <Link to="Sugar-Free">
            <img
              src={require("../images/sugar free cake.jpeg")}
              alt="Sugar Free Cakes"
            />
            <h3>Sugar Free Cakes</h3>
          </Link>
        </div>
        <div id="Cup-Cakes">
          <Link to="Cup">
            <img src={require("../images/cup cake.jpeg")} alt="Cup Cakes" />
            <h3>Cup Cakes</h3>
          </Link>
        </div>
        <div id="Engagement-Cakes">
          <Link to="Engagement">
            <img
              src={require("../images/engagement cake.jpeg")}
              alt="Engagement Cakes"
            />
            <h3>Engagement Cakes</h3>
          </Link>
        </div>
        <div id="Heart-Shaped-Cakes">
          <Link to="Heart-Shaped">
            <img
              src={require("../images/heart shaped cake.jpeg")}
              alt="Heart Shaped Cakes"
            />
            <h3>Heart Shaped Cakes</h3>
          </Link>
        </div>
        <div id="Theme-Cakes">
          <Link to="Theme">
            <img src={require("../images/theme cake.jpeg")} alt="Theme Cakes" />
            <h3>Theme Cakes</h3>
          </Link>
        </div>
        <div id="6-Month-Birthday-Cakes">
          <Link to="6-Months">
            <img
              src={require("../images/6 month.jpeg")}
              alt="Six Month Birthday Cakes"
            />
            <h3>Six Month Birthday Cakes</h3>
          </Link>
        </div>
        <div id="Valentines-Day-Cakes">
          <Link to="Valentines">
            <img
              src={require("../images/valentine cake.jpg")}
              alt="Valentines Day Cakes"
            />
            <h3>Valentines Day Cakes</h3>
          </Link>
        </div>
        <div id="Wedding-Cakes">
          <Link to="Wedding">
            <img
              src={require("../images/wedding Cake.jpg")}
              alt="Wedding Cakes"
            />
            <h3>Wedding Cakes</h3>
          </Link>
        </div>
        <div id="custumized-chocolate">
          <Link to="Chocolates">
            <img
              src={require("../images/customize chocolate.jpg")}
              alt="Customized Chocolate"
            />
            <h3>Customized Chocolate</h3>
          </Link>
        </div>
      </div>
      <div id="why-us">
        <h2>Why Choose Home Bake Cakes?</h2>

        <img
          src={require("../images/homemade.jpg")}
          alt="Homemade Love - Home Baked Cakes"
        />
        <img src={require("../images/fresh.jpeg")} alt="Freshly Baked Cakes" />
        <img src={require("../images/Hygiene.jpeg")} alt="Hygienic Baking" />
      </div>

      <div id="cake-size">
        <h2>Choose Your Preferred Cake Size</h2>
        <ul>
          <li>
            <Link to="250-gram-cakes">250 Gram cakes</Link>
          </li>
          <li>
            <Link to="500-gram-cakes">500 Gram cakes</Link>
          </li>
          <li>
            <Link to="1-KG-Cakes">1 KG cakes</Link>
          </li>
          <li>
            <Link to="1.5-KG-Cakes">1.5 KG cakes</Link>
          </li>
          <li>
            <Link to="2-KG-Cakes">2 KG cakes</Link>
          </li>
          <li>
            <Link to="2.5-KG-Cakes">2.5 KG cakes</Link>
          </li>
          <li>
            <Link to="3-KG-Cakes">3 KG cakes</Link>
          </li>
          <li>
            <Link to="3.5-KG-Cakes">3.5 KG cakes</Link>
          </li>
          <li>
            <Link to="4-KG-Cakes">4 KG cakes</Link>
          </li>
          <li>
            <Link to="4.5-KG-Cakes">4.5 KG cakes</Link>
          </li>
          <li>
            <Link to="5-KG-Cakes">5 KG cakes</Link>
          </li>
          <li>
            <Link to="5.5-KG-Cakes">5.5 KG cakes</Link>
          </li>
          <li>
            <Link to="6-KG-Cakes">6 KG cakes</Link>
          </li>
          <li>
            <Link to="6.5-KG-Cakes">6.5 KG cakes</Link>
          </li>
          <li>
            <Link to="7-KG-Cakes">7 KG cakes</Link>
          </li>
          <li>
            <Link to="7.5-KG-Cakes">7.5 KG cakes</Link>
          </li>
          <li>
            <Link to="8-KG-Cakes">8 KG cakes</Link>
          </li>
          <li>
            <Link to="8.5-KG-Cakes">8.5 KG cakes</Link>
          </li>
          <li>
            <Link to="9-KG-Cakes">9 KG cakes</Link>
          </li>
          <li>
            <Link to="9.5-KG-Cakes">9.5 KG cakes</Link>
          </li>
          <li>
            <Link to="10-KG-Cakes">10 KG cakes</Link>
          </li>
          <li>
            <Link to="10.5-KG-Cakes">10.5 KG cakes</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};

export default Catigory;
