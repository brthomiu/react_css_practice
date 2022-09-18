import React from 'react'
import './about.css'
import aboutImage from '../../assets/test.png'

const About = () => {
  return (
    <section id='about'>

        <div className="about__box">
            
            <h2>About</h2>

            <div className="about__content">
                <p>Big Placeholder</p>
            </div>

        </div>

        <div className="about__box-img">
            
            <img src={aboutImage} alt="test" className="about__image" />

        </div>

    </section>
  )
}

export default About