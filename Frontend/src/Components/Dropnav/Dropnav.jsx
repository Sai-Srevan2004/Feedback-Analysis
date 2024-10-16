import React from 'react'
import './Dropnav.css'
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const Dropnav = ({showDnav,setShowDnav}) => {
  return (
    <div className={`dropnav ${showDnav?"height-dnav":"no-height-dnav"}`}>
       <ul>
        <NavLink to='/dashboard'><li>Dashboard</li>
        </NavLink>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing"></a>Pricing</li>
        <li><a href="#contact">Contact</a></li>
       </ul>
       <span onClick={()=>setShowDnav(false)} className='crossd'><RxCross1/></span>
    </div>
  )
}

export default Dropnav
