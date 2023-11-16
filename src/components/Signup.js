import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials]= useState({name:"", email:"", password:""});
    const history= useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const {name, email, password}=credentials;
        const response= await fetch("https://bike-shop-xtcg.onrender.com/api/auth/createuser", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
          });
          const json= await response.json();
          
          if(json.success){
            //Save the auth token and redirect
            console.log(json);
            localStorage.setItem('token', json.authToken);
            history("/");
            props.showAlert("Account Created Successfully","success");
          }else{
            props.showAlert("Invalid Credentials","danger");
          }
    }

    const onChange=(e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
    return (
        <div className='container mt-2'>
            <h2>Create an account </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" placeholder="Enter email" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" placeholder="Enter email" onChange={onChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={onChange} minLength={5} required />
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">ConfirmPassword</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" placeholder="Password" onChange={onChange} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
