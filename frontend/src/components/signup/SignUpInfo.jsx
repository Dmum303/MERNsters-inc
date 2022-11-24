import React from 'react'
import ReactDOM from 'react-dom/client';
// import './signup.css'
import App from '../../App.jsx';
import { BrowserRouter } from 'react-router-dom';

const SignUpInfo = ({formData, setFormData}) => {
    return (
    <>
    <div className='sign-up-container'>
        <input type={'text'} placeholder={'Username'} value={formData.userName}
        onChange={(event) =>
          setFormData({ ...formData, userName: event.target.value })
        }/>
        <input type={'text'} placeholder={'First Name'} value={formData.firstName}
        onChange={(event) =>
          setFormData({ ...formData, firstName: event.target.value })
        }/>
        <input type={'text'} placeholder={'Last Name'} value={formData.lastName}
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }/>
        <input type={'text'} placeholder={'Email'} value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }/>
        <input type={'text'} placeholder={'Password'} value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }/>
        <input type={'text'} placeholder={'Confirm Password'} value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }/>
    </div>
    </>
    )
} 

export default SignUpInfo;