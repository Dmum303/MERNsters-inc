import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import NavBar from "../lib/navbar";

const Homepage = () => {
  return (
    <>
      <NavBar linkTo='login' />
      <div className="homepage-form">
        <div className="signup-title">
          <h1>Swipe Right®</h1>
        </div>

        <Link to="/signup">
        <div className="signup-button">
          <p>Create account</p>
        </div>
        </Link>
        <div className="footer"></div>
      </div>
    </>
  );
};

export default Homepage;
