import React from "react";
import LearnMore from "./LearnMore";
import "./HeroText.css";

const HeroText = () => {
  return (
    <div className="hero_text">
      <p className="out">Outstanding</p>
      <p className="coffee">Coffee Shop</p>
      <p className="abt">
        Our coffee is made with love and passion. We are dedicated to serving
        the best coffee in town. Come and enjoy our coffee!
      </p>
      <LearnMore />
    </div>
  );
};

export default HeroText;
