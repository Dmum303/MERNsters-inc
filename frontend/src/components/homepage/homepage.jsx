import React from "react";
import "./homepage.css";
import NavBar from "./navbar";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <div className="homepage-form">
        <div className="signup-title">
          <h1>Swipe Right®</h1>
        </div>

        <div className="signup-button">
          <p>Create account</p>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
};

export default Homepage;
