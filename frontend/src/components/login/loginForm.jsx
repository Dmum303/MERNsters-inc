// Login form component that returns posts an email and pass to the backend
import { useState } from "react";
import './loginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(
      data => {window.localStorage.setItem("token", data.token)
      console.log(window.localStorage.getItem('token'), 'This is the token')}
    )
  };
  
  return (
    <div className="login-form">
      <div className="login-title">
        <h1>Login Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="login-input">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="login-input">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="login-button">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="footer"></div>
    </div>
  );
};

export default LoginForm;
