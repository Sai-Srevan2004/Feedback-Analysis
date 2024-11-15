import React from 'react';
import './Nav.css';
import { TiThMenu } from "react-icons/ti";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6";
const Nav = ({setShowLogin,setShowDnav}) => {

  const token=useSelector((state)=>state.auth.token)

  console.log(token)

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
      {
        token ? <Link to='/profile'><div style={{ fontSize: '35px',paddingRight:'100px' }}><FaRegCircleUser/></div></Link>:<button onClick={()=>setShowLogin(true)}>Login</button>

      }
    </div>
  );
};

export default Nav;
