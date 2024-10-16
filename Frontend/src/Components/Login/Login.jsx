import React from 'react';
import './Login.css';
import { RxCross1 } from "react-icons/rx";

const Login = ({setShowLogin,setShowSignup}) => {

  return (
    <div className="login-container">
      <h2>Login</h2>
      <span onClick={()=>setShowLogin(false)} className='cross'><RxCross1/></span>
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="eml">Email:</label>
          <input type="email" id="eml" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
        <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
      </form>
      <p className="signup-link" onClick={()=>setShowSignup(true)}>
        Don't have an account? <span>Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
