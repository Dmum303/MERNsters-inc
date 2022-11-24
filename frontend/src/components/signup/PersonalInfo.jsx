import React from "react";
import { useState } from "react";

const PersonalInfo = ({ formData, setFormData }) => {
  function onChangeValue(event) {
    setFormData({ ...formData, interest: event.target.value });
    console.log(event.target.value);
  }

  return (
    <>
      <div className="personal-info-container">
        <input
          type={"file"}
          placeholder={"Profile picture"}
          value={formData.profilePic}
          onChange={(event) =>
            setFormData({ ...formData, profilePic: event.target.value })
          }
        />
        <div onChange={onChangeValue}>
          <input
            type="radio"
            value="Heli-skiing"
            name="interest"
            checked={formData.interest === "Heli-skiing"}
          />{" "}
          Heli-skiing
          <input
            type="radio"
            value="Quidditch"
            name="interest"
            checked={formData.interest === "Quidditch"}
          />{" "}
          Quidditch
          <input
            type="radio"
            value="Geocaching"
            name="interest"
            checked={formData.interest === "Geocaching"}
          />{" "}
          Geocaching
          <input
            type="radio"
            value="Ker-Plucking"
            name="interest"
            checked={formData.interest === "Ker-Plucking"}
          />{" "}
          Ker-Plucking
          <input
            type="radio"
            value="News-raising"
            name="interest"
            checked={formData.interest === "News-raising"}
          />{" "}
          News-raising
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
