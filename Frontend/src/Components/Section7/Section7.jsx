import React from 'react'
import './Section7.css'

const Section7 = () => {
  return (
    <div className='section7' id='contact'>
       <div className="contact-container">
      <div className="info-section">
        <h1 className="info-title">Get in Touch</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_Y3Ld81RdpqwkBsXzjLsco8bZ8IxhFboFw&s" // Replace with your image URL
          alt="Contact"
          className="info-image"
        />
        <p className="info-description">
          We would love to hear from you! Please fill out the form, and we'll get back to you shortly.
        </p>
      </div>
      <form className="contact-form">
        <h2 className="form-title">Contact Us</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
    </div>
  )
}

export default Section7
