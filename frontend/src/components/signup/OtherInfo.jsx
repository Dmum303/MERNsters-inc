import React from 'react'
import ReactDOM from 'react-dom/client';
// import './signup.css'
import App from '../../App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

const OtherInfo = () => {
    const [gender, setGender] = useState("Female");

    function onChangeValue(event) {
      setGender(event.target.value);
      console.log(event.target.value);
    }

    return (
    <>
    <div className='other-info-container'>
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