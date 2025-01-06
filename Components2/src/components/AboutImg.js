import React from "react";
import "./AboutImg.css";

const AboutImg = () => {
  return (
    <div className="img">
      <img src={require("./coffe.jpg")} alt="profile" />
    </div>
  );
};

export default AboutImg;
