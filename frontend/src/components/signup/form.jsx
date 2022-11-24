import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import App from '../../App.jsx';
import { BrowserRouter } from 'react-router-dom';

import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
// import './signup.css'

// import App from '../../App.jsx';

const Form = () => {
    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      profilePic: "",
      interest: "",
      birthday: "",
      gender: ""
    });
  

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

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        fetch("/users/", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            firstName,
            lastName,
            email,
            password,
            profilePic,
            interest,
            birthday,
            gender
          }),
        }).then((response) => {
          // The thing afterwards
        });
      };
    return(
        <>
        <div className='form'></div>
  
        <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>

        
<div className='form-container'>
      
        <div className='form-header'>
            <h1>{FormTitles[page]}</h1>
        </div>

        <div className='form-body'>{PageDisplay()}</div>
        <div className='form-footer'>
        <button className='prev-btn'

            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}>Previous</button>

        <button className='next-btn' 
         onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                handleSubmit()
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
        </div>

        </>
    )
}

export default Form;