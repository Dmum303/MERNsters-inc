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
        <label>
          Profile pic:
          <input
            type="file"
            id="userImage"
            name="filename"
            // placeholder={'Profile picture'}
            // value={formData.profilePic}
            onChange={
              (event) => lastNoSetData(event)
              // const lastImage = event.target.files.lenght - 1;
              // setFormData({ ...formData, profilePic: event.target.files[0] });
            }
          />
        </label>
        <label>
          Interest:
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
        </label>
      </div>
    </>
  );
};

export default PersonalInfo;
