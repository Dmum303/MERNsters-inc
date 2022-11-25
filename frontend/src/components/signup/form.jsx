import React, { useState } from 'react'

import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import { response } from 'express';

const Form = () => {
    const [page, setPage] = useState(0);
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [formData, setFormData] = useState({
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      profilePic: "",
      interests: "Heli-skiing",
      birthday: "",
      gender: ""
    });
    
    // function that sends post signup request to backend
    const submitForm = () => {
      fetch('/api/users/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(async data => {
        window.localStorage.setItem("token", data.token);
        setToken(window.localStorage.getItem("token"));
        console.log(data);
      })
      .catch(err => console.log(err));
      if (response.status===201) {
        navigate('/interests')
      }
      else {
        console.log('Signup failed')
        navigate('/signup')
      }
    }
    

    const FormTitles = ["Sign Up", "Personal Info", "Other"];


    const PageDisplay = () => {
        if (page === 0) {
          return <SignUpInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
          return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else {
          return <OtherInfo formData={formData} setFormData={setFormData} />;
        }
      };

    return(
        <>
        <div className='form'></div>
        <div className='progressbar'></div>
        <div style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}

        ></div>

        
<div className='form-container'>
      
        <div className='form-header'>
            <h1>{FormTitles[page]}</h1>
        </div>

        <div className='form-body'>{PageDisplay()}</div>
        <div className='form-footer'></div>
        <button className='prev-btn'

            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}>Previous</button>

        <button className='next-btn' 
         onClick={() => {
              if (page === FormTitles.length - 1) {
                submitForm();
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
        </>
    )
}

export default Form;