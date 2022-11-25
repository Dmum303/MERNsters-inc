import React from "react";

const OtherInfo = ({ formData, setFormData }) => {
  function onChangeValue(event) {
    setFormData({ ...formData, gender: event.target.value });
  }

  function changeBirthday(event) {
    setFormData({ ...formData, birthday: event.target.value });
  }

  const current = new Date().toISOString().split("T")[0];
  console.log(formData.gender);
  return (
    <>
      <div className="other-info-container">
      <label> Date of birth:
        <input
          onChange={changeBirthday}
          type="date"
          placeholder="Birthday"
          max={current}
        />
        </label>
        <label>Gender:
        <div>
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={formData.gender === "Female"}
            onChange={onChangeValue}
          />{" "}
          Female
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={formData.gender === "Male"}
            onChange={onChangeValue}
          />{" "}
          Male
          <input
            type="radio"
            value="Other"
            name="gender"
            checked={formData.gender === "Other"}
            onChange={onChangeValue}
          />{" "}
          Other
        </div>
        </label>
      </div>
    </>
  );
};

export default OtherInfo;
