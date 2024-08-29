import React from 'react'
import './AboutUs.css'
import miya from '../../../assets/img/miya.jpg'


const AboutUs = () => {
  return (
    <div className='Container'>
        <div className="about-us-container">
            <div className="team-member">
                <h2>Our Team</h2>
                <div className="member-card">
                    <img className='member-img' src={miya} alt='miyaImage'/>
                    <h3 className='member-name'>Mashbooba Zakariya</h3>
                    <p className='member-role'>Co-Founder</p>
                </div>
            </div>
            <div className="about-us-description">
                <h1 className='about-us-heading'>About Us</h1>
                <p>
                    With a passion for empowering learning of all ages,our mission 
                    is to make education accessible,engaging and personalized
                    through our cutting-edge educational technology platform.
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default AboutUs
