import React from "react";
import { useState } from "react";

const PersonalInfo = ({ formData, setFormData }) => {
  function onChangeValue(event) {
    setFormData({ ...formData, interests: event.target.value });
  }

  const lastNoSetData = (event) => {
    const lastImage = event.target.files.length - 1;
    setFormData({ ...formData, profilePic: event.target.files[lastImage] });
  };

  return (
    <>
      <div className="personal-info-container">
        <label className='profile-pic-input-container'>
          Profile pic:
          <input
            type="file"
            id="userImage"
            name="filename"
            onChange={(event) => lastNoSetData(event)}
          />
        </label>
        <p className='interests-label'>Choose an interest:</p>
        <div className="interests-container">
          <label>
            Heli-skiing
            <input
              onChange={onChangeValue}
              type="radio"
              value="Heli-skiing"
              name="interest"
              checked={formData.interests === "Heli-skiing"}
            />
          </label>
          <label>
            Quidditch
            <input
              onChange={onChangeValue}
              type="radio"
              value="Quidditch"
              name="interest"
              checked={formData.interests === "Quidditch"}
            />
          </label>
          <label>
            Geocaching
            <input
              onChange={onChangeValue}
              type="radio"
              value="Geocaching"
              name="interest"
              checked={formData.interests === "Geocaching"}
            />
          </label>
          <label>
            Ker-Plucking
            <input
              onChange={onChangeValue}
              type="radio"
              value="Ker-Plucking"
              name="interest"
              checked={formData.interests === "Ker-Plucking"}
            />
          </label>
          <label>
            News-raising
            <input
              onChange={onChangeValue}
              type="radio"
              value="News-raising"
              name="interest"
              checked={formData.interests === "News-raising"}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
