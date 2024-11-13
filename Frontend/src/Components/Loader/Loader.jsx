import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '10px' }}>
      <img style={{ height: '220px', width: '220px' }} src="https://integralads.com/wp-content/uploads/2023/06/Wombles_1000px.gif" alt="" />
      <div >
      <h1 style={{color:'whitesmoke'}}>Analyzing<span class="dots"><span>.</span><span>.</span><span>.</span></span></h1>

        <p>Please wait it may take few minutes</p>
      </div>
    </div>
  )
}

export default Loader
