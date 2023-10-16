import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import loginDetails from '../data/loginDetails.json';
import { useAuth } from '../AuthContext';
import "../styles/login.css"

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (loginDetails.email === email && loginDetails.password === password) {
      let formData = new FormData(e.currentTarget);
      let email = formData.get("email");

      auth.login(email, () => {
        localStorage.setItem("user", loginDetails.name);
        navigate(from, { replace: true });
      });
      return;
    } else {
      alert("Invalid login credentials");
    }
  }

  return (

    <div className="login-container">
      <div className="left-section">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" rounded />
      </div>
      <div className="right-section">
        <h1>Todo List Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className='inp'>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" onChange={handleChange} value={email} />
          </div>
          <div className='inp'>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" onChange={handleChange} value={password} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login