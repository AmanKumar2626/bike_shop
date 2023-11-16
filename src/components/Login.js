import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials]= useState({email:"", password:""});
    let history= useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response= await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
    
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
          });
          const json= await response.json();
          
          if(json.success){
            //Save the auth token and redirect
            console.log(json);
            localStorage.setItem('token', json.authToken);
            history("/");
            props.showAlert("Logged in Successfully","success");
          }else{
            props.showAlert("Invalid Details","danger");
          }
    }

    const onChange=(e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
    return (
        <div className='mt-2'>
            <h2>Login to continue </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} value={credentials.email} placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" onChange={onChange} value={credentials.password} placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
