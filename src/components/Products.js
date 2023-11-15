import React, {useContext, useEffect} from 'react'
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"

const  Products = () => {
  return (
    <section className="products" id="products">
        <div className="heading">
            <h1>Products</h1>
        </div>

        <div className="container">

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
  )
}
export default Products