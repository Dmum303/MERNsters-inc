import React from 'react'
import ReactDOM from 'react-dom/client';
import App from '../../App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

const OtherInfo = ({formData, setFormData}) => {
    const [gender, setGender] = useState("Female");

    function onChangeValue(event) {
      setGender(event.target.value);
      console.log(event.target.value);
    }

    const current = new Date().toISOString().split("T")[0]


    return (
    <>
    <div className='other-info-container'>
    <input type= {'date'} placeholder={'Birthday'} max={current} value={formData.birthday}
        onChange={(e) => {
          setFormData({ ...formData, birthday: e.target.value });
        }} />
        <div onChange={onChangeValue}>
            <input type="radio"  name="gender" checked={gender === "Female"}
                value={formData.female}
                 onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value }); }} /> Female
            <input type="radio"  name="gender" checked={gender === "Male"} 
                  value={formData.male}
                  onChange={(e) => {
                 setFormData({ ...formData, gender: e.target.value }); }} /> Male
            <input type="radio" name="gender" checked={gender === "Other"} value={formData.other} onChange={(e) => {
                    setFormData({ ...formData, gender: e.target.value });}}/> Other
        </div>
    </div>



    </>
    )
} 

export default OtherInfo;