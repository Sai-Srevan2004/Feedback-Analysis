import React from 'react';
import './Nav.css';
import { TiThMenu } from "react-icons/ti";
import {Link} from 'react-router-dom'

const Nav = ({setShowLogin,setShowDnav}) => {
  return (
    <div className='navbar'>
      <span onClick={()=>setShowDnav(true)}><TiThMenu /></span>
      <ul>
        <Link to='/dashboard'><li>Dashboard</li></Link>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>

      </ul>
      <button onClick={()=>setShowLogin(true)}>Login</button>
    </div>
  );
};

export default Nav;
