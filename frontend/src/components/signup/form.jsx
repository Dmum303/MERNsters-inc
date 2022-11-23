import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
// import './signup.css'
import App from '../../App.jsx';
import { BrowserRouter } from 'react-router-dom';


const Form = () => {
    const [page, setPage] = useState(0);

    const FormTitles = ["Sign Up", "Personal Info", "Other"];
    return(
        <>
        <h1>Signup</h1>
        <div className='form'></div>
        <div className='progressbar'></div>
        <div className='form-container'></div>


        <div className='form-header'>
            <h1>{FormTitles[page]}</h1>
        </div>

        <div className='form-body'></div>
        <div className='form-footer'></div>
        <button className='prev-btn'>Previous</button>

        <button className='next-btn' onClick={() => {
            setPage((currPage) => currPage + 1)
        }}>Next</button>
        
        </>
    )
}

export default Form;