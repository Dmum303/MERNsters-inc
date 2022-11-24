import React from 'react'
import ReactDOM from 'react-dom/client';
import App from '../../App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

const PersonalInfo = ({formData, setFormData}) => {
    const [interest, setInterest] = useState("Heli-skiing");

    function onChangeValue(event) {
      setInterest(event.target.value);
      console.log(event.target.value);
    }

    return (
    <>

    <div className='personal-info-containter'>
        <input type={'file'} placeholder={'Profile picture'} value={formData.profilePic}
        onChange={(event) =>
          setFormData({ ...formData, profilePic: event.target.value })}
          />
        <div onChange={onChangeValue}>
            <input type="radio" value={formData.interest}
                onChange={(event) =>
                setFormData({ ...formData, interest: event.target.value })}
             name="interest" checked={interest === "Heli-skiing"} /> Heli-skiing
            <input type="radio" value="Quidditch" name="interest" checked={interest === "Quidditch"} /> Quidditch
            <input type="radio" value="Geocaching" name="interest" checked={interest === "Geocaching"} /> Geocaching
            <input type="radio" value="Ker-Plucking" name="interest" checked={interest === "Ker-Plucking"} /> Ker-Plucking
            <input type="radio" value="News-raising" name="interest" checked={interest=== "News-raising"} /> News-raising
        </div>
    </div>



    </>
    )
} 

export default PersonalInfo;