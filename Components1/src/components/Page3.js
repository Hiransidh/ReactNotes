import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import "./Page3.css";

const Page3 = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FontAwesomeIcon icon={faFacebook} className="fa" />
        <FontAwesomeIcon icon={faTwitter} className="fa" />
        <FontAwesomeIcon icon={faInstagram} className="fa" />
        <FontAwesomeIcon icon={faSnapchat} className="fa" />
      </div>
      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <p>&copy; 2021 Profile Card</p>
    </div>
  );
};

export default Page3;
