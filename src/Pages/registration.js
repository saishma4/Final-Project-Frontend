import React, { useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [data, setData] =useState({ 
        username:"", 
        password:"", 
        email:"",
        confirmPassword:"" 
    })
    
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()// to prevent anything pending
        if (password !== confirmPassword) {
            alert("mismatch of password and confirmPassword")
        }
        else {
            console.log(data)
            //document.write(" Registration succesfull")
            navigate('/login')
        }
    }
    const { username, password, email, confirmPassword } = data;
    return (
        <div className='container'>
            <form >
                <h1>SignUp</h1>
                <label>Username</label>
                <br />
                <input type="text" name="username" placeholder='username' value={username} onChange={changeHandler} />
                <br />
                <label>Email</label>
                <br />
                <input type="email" name="email" value={email} placeholder='example@gmail.com' onChange={changeHandler} />
                <br />
                <label>Password</label>
                <br />
                <input type="password" name="password" placeholder='password' value={password} onChange={changeHandler} />
                <br />
                <label>Confirm Password</label>
                <br />
                <input type="password" name="confirmPassword" placeholder='confirm password' value={confirmPassword} onChange={changeHandler} />
                <br />
                <p>Already Have an Account <Link to="/login" >Login</Link></p>
                <button onClick={submitHandler}>Submit</button>
                <br />
            </form>
        </div >
    );
}
export default Register;