import React from 'react'

const Contact = () => {
  return (
    <div>
 <section id="contact">
 <div className="container">
   <div className="sectionHead">Contact Us</div>
   <hr className="bg-white" />
   <br />
   <div className="row">
     <div className="col-md-7">
       <div className="row">
         <div className="col-md-6 offset-md-2">
           <h4 className="sectionSubSubHead text-capitalize">
             Send A message
           </h4>
           <form>
             <div className="form-group">
               <input
                 type="text"
                 className="form-control"
                 required=""
                 placeholder="Name*"
               />
             </div>
             <div className="form-group">
               <input
                 type="email"
                 className="form-control"
                 required=""
                 placeholder="Email*"
               />
             </div>
             <div className="form-group">
               <input
                 type="tel"
                 className="form-control"
                 required=""
                 placeholder="Phone*"
               />
             </div>
             <div className="form-group">
               <textarea
                 type="text"
                 className="form-control"
                 required=""
                 placeholder="Message*"
                 defaultValue={""}
               />
             </div>
             <div className="form-group">
               <button className="btn btn-orange" type="submit">
                 Send
               </button>
             </div>
           </form>
         </div>
       </div>
     </div>
     <div className="col-md-3">
       <h4 className="sectionSubSubHead">Address :</h4>
       <ul className="list-unstyled">
         <li>My Bike Pvt. Ltd.</li>
         <li>Bhuli, Dhanbad</li>
         <li> Jharkhand , India</li>
         <li>Pin: 416001</li>
         <li>Phone: +91 9xxxxxxxx</li>
         <li>Email: example@domain.com</li>
       </ul>
     </div>
   </div>
 </div>
</section>
</div>
  )
}
export default Contact