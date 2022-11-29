import React from 'react';
import { useState } from 'react';

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
          {' '}
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
          {' '}
          Interest:
          <div>
            <input
              onChange={onChangeValue}
              type="radio"
              value="Heli-skiing"
              name="interest"
              checked={formData.interests === 'Heli-skiing'}
            />{' '}
            Heli-skiing
            <br />
            <input
              onChange={onChangeValue}
              type="radio"
              value="Quidditch"
              name="interest"
              checked={formData.interests === 'Quidditch'}
            />{' '}
            Quidditch
            <br />
            <input
              onChange={onChangeValue}
              type="radio"
              value="Geocaching"
              name="interest"
              checked={formData.interests === 'Geocaching'}
            />{' '}
            Geocaching
            <br />
            <input
              onChange={onChangeValue}
              type="radio"
              value="Ker-Plucking"
              name="interest"
              checked={formData.interests === 'Ker-Plucking'}
            />{' '}
            Ker-Plucking
            <br />
            <input
              onChange={onChangeValue}
              type="radio"
              value="News-raising"
              name="interest"
              checked={formData.interests === 'News-raising'}
            />{' '}
            News-raising
          </div>
        </label>
      </div>
    </>
  );
};

export default PersonalInfo;
