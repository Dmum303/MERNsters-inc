import React from 'react'
import ReactDOM from 'react-dom/client';
// import './signup.css'
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
    <input type= {'date'} placeholder={'Birthday'} max={current} />
        <div onChange={onChangeValue}>
            <input type="radio" value="Female" name="gender" checked={gender === "Female"}/> Female
            <input type="radio" value="Male" name="gender" checked={gender === "Male"} /> Male
            <input type="radio" value="Other" name="gender" checked={gender === "Other"} /> Other
        </div>
    </div>



    </>
    )
} 

export default OtherInfo;