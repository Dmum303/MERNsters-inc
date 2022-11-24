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

    const FormTitles = ["Sign Up", "Personal Info", "Other"];

    const PageDisplay = () => {
        if (page === 0) {
          return <SignUpInfo />;
        } else if (page === 1) {
          return <PersonalInfo />;
        } else {
          return <OtherInfo />;
        }
      };

    return(
        <>
        <div className='form'></div>
        <div className='progressbar'></div>
        <div className='form-container'></div>

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
        disabled={page == FormTitles.length - 1} 
        onClick={() => {    
            setPage((currPage) => currPage + 1)
        }}>Next</button>
        
        </>
    )
}

export default Form;