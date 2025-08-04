import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SplashPage() {
  return (
    <div className="splash-container">
      <Navbar isLogInButtonVisible={true}/>
      <div className="welcome-banner">
        

        <div className="splash-text">
          <p>
            Discover an innovative approach to healing with ketamine that is
            transformative, responsible, <br /> and deeply human.
          </p>
        </div>
      </div>

      <div className="collapsables-banner">
        <div className="splash-text">
          <p>
            Learn more about our unique protocols and resources designed to support healing.
          </p>
        </div>
      </div>
    </div>
  );
}
  