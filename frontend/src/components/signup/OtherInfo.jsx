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
        <input
          onChange={changeBirthday}
          type="date"
          placeholder="Birthday"
          max={current}
        />
        <div onChange={onChangeValue}>
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={formData.gender === "Female"}
          />{" "}
          Female
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={formData.gender === "Male"}
          />{" "}
          Male
          <input
            type="radio"
            value="Other"
            name="gender"
            checked={formData.gender === "Other"}
          />{" "}
          Other
        </div>
      </div>
    </>
  );
};

export default OtherInfo;
