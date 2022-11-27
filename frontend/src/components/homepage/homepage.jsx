import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import NavBar from "./navbar";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <div className="homepage-form">
        <div className="signup-title">
          <h1>Don't be alone. Join friendzone®</h1>
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
