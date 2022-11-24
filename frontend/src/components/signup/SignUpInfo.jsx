import React from 'react'
import ReactDOM from 'react-dom/client';
// import './signup.css'
import App from '../../App.jsx';
import { BrowserRouter } from 'react-router-dom';

const SignUpInfo = () => {
    return (
    <>
    <div className='sign-up-container'>
        <input type={'text'} placeholder={'Username'} />
        <input type={'text'} placeholder={'First Name'} />
        <input type={'text'} placeholder={'Last Name'} />
        <input type={'text'} placeholder={'Email'} />
        <input type={'text'} placeholder={'Password'} />
        <input type={'text'} placeholder={'Confirm Password'} />
    </div>
    </>
    )
} 

export default SignUpInfo;