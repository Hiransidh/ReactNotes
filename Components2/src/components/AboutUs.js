import React from "react";
import "./AboutUs.css";
import AboutImg from "./AboutImg";

const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <div className="about">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, tortor in tincidunt mattis, justo diam lacinia libero,
            nec ultricies nunc felis at nisl.
          </p>
          <p>
            Integer nec purus ac enim condimentum cursus. Nullam ac tincidunt
            justo. Donec in justo et nunc luctus suscipit. Nullam et nunc vel
            nisi aliquam dictum. Donec in justo et nunc luctus suscipit. Nullam
            et nunc vel nisi aliquam dictum.
          </p>
          <button>Read More</button>
        </div>
        <AboutImg />
      </div>
    </div>
  );
};

export default AboutUs;
