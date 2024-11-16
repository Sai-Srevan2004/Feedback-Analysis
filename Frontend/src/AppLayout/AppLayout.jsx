import React,{useState} from 'react'
import './AppLayout.css'
import Section8 from '../Components/Section8/Section8'

import {Outlet} from 'react-router-dom'


const AppLayout = () => {





  return (
    <div className='applayout'>
      <Outlet></Outlet>
      <Section8></Section8>
    </div>
  )
}

export default AppLayout
