import React, { useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import './registration.css';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate()
    const [data, setData] =useState({ 
        username:"", 
        password:"", 
        email:"",
        confirmpassword:"" 
    })
    
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
   
    // const submitHandler = (e) => {
    //     e.preventDefault()// to prevent anything pending
    //     if (password !== confirmPassword) {
    //         alert("mismatch of password and confirmPassword")
    //     }
    //     else {
    //         console.log(data)
    //         //document.write(" Registration succesfull")
    //         navigate('/login')
    //     }
    // }
    const { username, password, email, confirmpassword } = data;
    const submitHandler = e => {
        e.preventDefault();
        addDataToServer(data)
    }
    console.log(data);
    const addDataToServer = (cred) => {
        console.log(cred);
        axios.post("http://localhost:8080/api/auth/registration", cred).then(
            (response) => {
                
                console.log(response);
                alert("user Added Successfully");
                if (response.status==200) {
                    console.log("navigating");
                    navigate('/login');
                }
            }, (error) => {
                console.log(error);
                alert("Operation failed");
            }
        );
    }
    return (
        <div className='register-container'>
            <form onSubmit={submitHandler} >
                <h1>SignUp</h1>
                <label>Username</label>
                <br />
                <input type="text" name="username" placeholder='username' value={username} onChange={changeHandler} required/>
                <br />
                <label>Email</label>
                <br />
                <input type="email" name="email" value={email} placeholder='example@gmail.com' onChange={changeHandler} required />
                <br />
                <label>Password</label>
                <br />
                <input type="password" name="password" placeholder='password' value={password} onChange={changeHandler} required/>
                <br />
                <label>Confirm Password</label>
                <br />
                <input type="password" name="confirmpassword" placeholder='confirm password' value={confirmpassword} onChange={changeHandler} required/>
                <br />
                <p>Already Have an Account <Link to="/login" >Login</Link></p>
                <button className="signup-button">SignUp</button>
                <br />
            </form>
        </div >
    );
}
export default Register;