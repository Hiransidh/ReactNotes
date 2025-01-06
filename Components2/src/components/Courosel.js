import React from "react";
import "./Courosel.css";

const Courosel = () => {
  return (
    <div className="courosel">
      <a href="/" className="left-arrow">
        <i className="fas fa-chevron-left"></i>
      </a>
      <a href="/" className="right-arrow">
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default Courosel;
