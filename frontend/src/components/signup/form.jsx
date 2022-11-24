import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
// import 'signup.css'
import App from '../../App.jsx';
import { BrowserRouter } from 'react-router-dom';
import PersonalInfo from './personalInfo.jsx';
import SignUpInfo from './SignUpInfo.jsx';
import OtherInfo from './otherInfo.jsx';


const Form = () => {
    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
      userName: "",
      firstName: "",
      lastName: "",
      firstName: "",
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
                alert("FORM SUBMITTED");
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