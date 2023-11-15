import React from 'react'
import "../styles.css"
import banner from "../images/banner1.jpg"
import Login from './Login';
import Signup from './Signup';
import Products from './Products';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"

const Home = (props) => {
  const navigate= useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("/login");
}
  return (
    <div>
      <header>
        <div className="container">
            <div className="logo">
                <h1>Bike Shop</h1>
            </div>

            <nav>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
            </nav>

            {!localStorage.getItem("token")? <form className="d-flex" role="search">
                            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
                        </form>: <button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
        </div>
    </header>


    {/* <!---== Home Section ==---> */}

    <section className="home" id="home">

        <div className="container">

            <div className="content">
                <h1>Ride with Style</h1>
                <h2>Join Biker's Club Now</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et
                     accusamus eveniet accusantium aliquam ratione ea perspiciatis aut 
                     molestiae laboriosam?</p>

                <a href="" className="btn">Learn More</a>
            </div>
            <div className="image">
                <img src={banner} alt="" /> 
            </div>
        </div>
    </section>

    {/* <!---== About Section ==---> */}

    <section className="about" id="about">
        
    </section>

    {/* <!---== Products Section ==---> */}

    <section className="products" id="products">
        <div className="heading">
            <h1>Products</h1>
        </div>

        <div class="container">

            <div className="box">
                <h2>Harley Davidson</h2>
                <div className="image">
                    <img src={image1} alt="" />
                </div>
            </div>

            <div className="box">
                <h2 className="tag">Kawasaki Ninja</h2>
                <div className="image">
                    <img className="center-img" src={image2} alt="" />
                </div>
            </div>

            <div className="box">
                <h2>BMW S1000</h2>
                <div className="image">
                    <img src={image3} alt="" />
                </div>
            </div>
        </div>
    </section>

   

    {/* Contact Section */}

    <section className="contact" id="contact">

        <div className="box">
            <h1>Contact US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatibus voluptate voluptates aliquid 
                eveniet? Magnam beatae minus earum error soluta.</p>
        </div>

        <div className="email">
            <input type="email" placeholder="Enter Your Email" className="email-1"/>
            <input type="submit" value="Send" className="submit"/>
        </div>

    </section>

    </div>
  )
}

export default Home
