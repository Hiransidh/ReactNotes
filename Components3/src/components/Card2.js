import React from "react";
import "./Card.css";

const Card2 = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h1>Coffee Shop</h1>
        </div>
        <div className="card-image">
          <img src={require("./cappucino.jpg")} alt="Latte" />
        </div>
        <div className="card-content">
          <h2>Cappuccino</h2>
          <p>Price: $5.49</p>
          <div className="btns">
            <button className="buy">Buy</button>
            <button className="cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
