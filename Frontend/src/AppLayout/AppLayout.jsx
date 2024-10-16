import React,{useState} from 'react'
import './AppLayout.css'
import Nav from '../Components/Nav/Nav'

import {Outlet} from 'react-router-dom'


const AppLayout = () => {





  return (
    <div className='applayout'>
      <Outlet></Outlet>
    </div>
  )
}

export default AppLayout
