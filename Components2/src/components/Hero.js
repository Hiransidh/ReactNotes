import React from "react";
import "./Hero.css";
import HeroText from "./HeroText";
import Courosel from "./Courosel";

const Hero = () => {
  return (
    <div className="hero">
      <HeroText />
      <Courosel />
    </div>
  );
};

export default Hero;
