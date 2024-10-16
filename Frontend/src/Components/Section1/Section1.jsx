import React from 'react'
import './Section1.css'
import Caurosel from '../Caurosel/Caurosel'
const Section1 = () => {
  return (
    <div className='section1 '>
            <div className="landing-page">
                <div className="first">
                    <h1>Feedback Analysis</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus recusandae consequatur? Ipsum provident cumque deleniti illo culpa.</p>
                </div>

                {/* <div className="landing-img">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxs9ph3SeMl-qRELyJGvswIDiVo-ZLSPRxg&s" alt="" />
         </div> */}

                <div className="second">
                    <p>Get your instant reviews!</p>
                    <a href="#url" className='button'>
                    <button ><p>start</p><span>&#8594;</span></button>
                    </a>
                </div> 
            </div>
            <Caurosel></Caurosel>

        </div>
  )
}

export default Section1
