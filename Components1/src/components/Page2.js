import React from "react";

import "./Page2.css";

const Page2 = () => {
  return (
    <div className="content">

      <h2>Welcome to the Vaccination Center</h2>
      <div className="about">
        
        <div className="para">
          <p>
            We are committed to providing you with the best vaccination
            services.
          </p>
          <p>Our Center is open from 8am to 5pm, Monday to Friday.</p>
          <p>
            Please brsing your ID and proof of address when you come for your
            vaccination.
          </p>
        </div>

        <div className="image">
          <img
            src={require("../vaccine.jpg")}
            alt="John Doe"
            className="profile"
          />
        </div>

      </div>

    </div>
  );
};

export default Page2;
