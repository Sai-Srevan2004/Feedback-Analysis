import React from 'react'
import AppLayout from './AppLayout/AppLayout'
import Dashboard from './Pages/Dashboard/Dashboard'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {path:'/',element:<AppLayout/>,children:[
    {path:'/',element:<Home/>},
    {path:'/dashboard',element:<Dashboard/>},
    {path:'/profile',element:<Profile/>}
  ]}
])

const App = () => {

  return (
   
      <RouterProvider router={router}/>
  
  
  )
}

export default App
