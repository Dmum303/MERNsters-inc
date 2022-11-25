import React from "react";
import { useState } from "react";

const PersonalInfo = ({ formData, setFormData }) => {
  function onChangeValue(event) {
    setFormData({ ...formData, interests: event.target.value });
  }

  return (
    <>
      <div className="personal-info-container">
        <label>
          {" "}
          Profile pic: <br />
          <input
            type={"file"}
            placeholder={"Profile picture"}
            value={formData.profilePic}
            onChange={(event) =>
              setFormData({ ...formData, profilePic: event.target.value })
            }
          />
        </label>
        <br />
        <br />
        <br />
        <label>
          {" "}
          Interest:
          <div>
            <input
              onChange={onChangeValue}
              type="radio"
              value="Heli-skiing"
              name="interest"
              checked={formData.interests === "Heli-skiing"}
            />{" "}
            Heli-skiing
            <input
              onChange={onChangeValue}
              type="radio"
              value="Quidditch"
              name="interest"
              checked={formData.interests === "Quidditch"}
            />{" "}
            Quidditch
            <input
              onChange={onChangeValue}
              type="radio"
              value="Geocaching"
              name="interest"
              checked={formData.interests === "Geocaching"}
            />{" "}
            Geocaching
            <input
              onChange={onChangeValue}
              type="radio"
              value="Ker-Plucking"
              name="interest"
              checked={formData.interests === "Ker-Plucking"}
            />{" "}
            Ker-Plucking
            <input
              onChange={onChangeValue}
              type="radio"
              value="News-raising"
              name="interest"
              checked={formData.interests === "News-raising"}
            />{" "}
            News-raising
          </div>
        </label>
      </div>
    </>
  );
};

export default PersonalInfo;
