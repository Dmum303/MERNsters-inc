import React, {useState} from 'react'

const SignUpInfo = ({formData, setFormData}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
      };

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
        <div>
        <input type={passwordShown ? "text" : "password"} placeholder={'Password'} value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }/>
        </div>
        <input type={passwordShown ? "text" : "password"} placeholder={'Confirm Password'} value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }/>
            <button onClick={togglePassword}>Show Password</button> 

    </div>




    </>
    )
} 

export default SignUpInfo;