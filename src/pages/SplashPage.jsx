import React from "react";
import { useNavigate } from "react-router-dom";

export default function SplashPage() {
    const navigate = useNavigate();
  
    return (
        <div
          style={{
            position: "relative",
            minHeight: "100vh",
            backgroundColor: "#242424",
          }}
        >
          {/* Login Button */}
          <div style={{ position: "absolute", top: 10, right: 10 }}>
            <button onClick={() => navigate("/app/login")}>Log In</button>
          </div>
    
          {/* Centered Text */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              padding: "0 1rem",
              textAlign: "center",
            }}
          >
            <p>
              Discover an innovative approach to healing with ketamine that is
              transformative, responsible, <br /> and deeply human.
            </p>
          </div>
        </div>
      );
  }
  