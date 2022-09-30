import React, { useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";

const Login = (props) => {
    const [data, setData] =useState({ 
        username:"", 
        password:"",
    })
    const [loginFormValues, setLoginFormValues] = useState({ username: "", password: "" })

    const changeHandler = (e) => {
        setLoginFormValues({ ...loginFormValues, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()// to prevent anything pending
        if(loginFormValues.username === data.username && loginFormValues.password === data.password){
            navigate('/')
           
        }
        else{
            alert("Enter valid details")
        }       
    }

    return (
        <div className='container'>
            <form >
                <h1>Login</h1>
                <label>Username</label>
                <br />
                <input type="text" name="username" placeholder='Enter username' value={loginFormValues.username} onChange={changeHandler} />
                <br />
                <label>Password</label>
                <br />
                <input type="password" name="password" placeholder='Enter Password' value={loginFormValues.password} onChange={changeHandler} />
                <br />
                <button onClick={submitHandler} id="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
