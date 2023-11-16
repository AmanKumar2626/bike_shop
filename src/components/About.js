import React, {useContext, useEffect} from 'react'
import aboutjpg from "../images/aboutbike.jpg"
const About = () => {
  return (
    <div>
    <div className="heading1"> 
            <h1>About Us</h1>
        </div>

        <div className="about-container">
            <div className="bike-image">
                <img src={aboutjpg} alt="" />
            </div>
            <div className="about-content">
                <h1>Why Choose Us?</h1>
                <h2>Make Your Ride Comfortable</h2>
                <p>At Velocity Bikes, we're more than just a bike selling platform; we're enthusiasts, riders, and advocates for the thrilling experience that comes with life on two wheels. Our story is rooted in a shared passion for bikes and a commitment to providing riders with the best possible journey.

</p>
                <p className="p">Our mission is simple: to bring the joy of biking to every rider. Whether you're a seasoned pro or just starting your biking adventure, Velocity Bikes is here to support your journey. We believe in the freedom, exhilaration, and sense of community that biking offers, and we strive to share that passion with every customer.</p>
                
                <a href="" className="btn">Learm More</a>
            </div>
        </div>
    </div>
  )
}

export default About
