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

    const current = new Date().toISOString().split("T")[0]

    return (
    <>
    <div className='other-info-container'>
        <div onChange={onChangeValue}>
            <input type="radio" value="Female" name="gender" checked={gender === "Female"}/> Female
            <input type="radio" value="Male" name="gender" checked={gender === "Male"} /> Male
            <input type="radio" value="Other" name="gender" checked={gender === "Other"} /> Other
        </div>
        <input type={'text'} placeholder={'Age'} />
        <input type={'text'} placeholder={'Height'} />
        <input type={'text'} placeholder={'Dietary Restrictions'} />
        <input type= {'date'} placeholder={'Date of Birth'} max={current} />
    </div>
    </>
    )
} 

export default OtherInfo;