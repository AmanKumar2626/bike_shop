// import React, {useContext, useEffect} from 'react'
import image1 from "../images/others/latest1.png"
import image2 from "../images/others/latest2.png"
import image3 from "../images/others/latest3.png"

const  Products = () => {
  return (
    <div>
 
 <section className="mb-40">
      <h1 className="text-5xl font-semibold text-center"> Latest <span className="text-[#E76F51]"> Bike Collection</span></h1>
      <div className="grid-container1">
        {/* First card */}
        <div className="card bg-base-100 shadow-xl">
          <figure><img src={image1} alt="Ducati XDIAVEL S-73" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Ducati XDIAVEL S-73</h2>
            <p>XDiavel Nera: made in Italy design and craftsmanship combine with technology and innovation in a motorcycle made by Ducati in partnership with Poltrona Frau's Interiors.</p>
            <div className="card-actions">
              <button className="btn text-white bg-[#E76F51] uppercase hover:bg-white hover:text-[#E76F51] hover:border-2 hover:border-[#E76F51]">Purchase</button>
            </div>
          </div>
        </div>
        {/* Second card */}
        <div className="card bg-base-100 shadow-xl">
          <figure><img src={image2} alt="Kawasaki Ninja H2R" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl uppercase">Kawasaki Ninja H2R</h2>
            <p>The Kawasaki Ninja H2R is powered by 998cc BS6 engine which develops a power of 305.75 bhp and a torque of 165 Nm. With both front and rear disc brakes, Kawasaki Ninja H2R.</p>
            <div className="card-actions">
              <button className="btn text-white bg-[#E76F51]  uppercase hover:bg-white hover:text-[#E76F51] hover:border-2 hover:border-[#E76F51] ">Purchase</button>
            </div>
          </div>
        </div>
        {/* Third card */}
        <div className="card bg-base-100 shadow-xl">
          <figure><img src={image3} alt="2021 Honda CBR500R" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">2021 Honda CBR500R</h2>
            <p>The latest Honda CBR500R is refined, well balanced, beautifully built and peppy. First introduced in 2014, it's a stalwart of the A2 genre and is now in its third iteration.</p>
            <div className="card-actions">
              <button className="btn text-white bg-[#E76F51]  uppercase hover:bg-white hover:text-[#E76F51] hover:border-2 hover:border-[#E76F51] ">Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </section>
 </div>        
  )
}
export default Products