import React, { useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import './registration.css'
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate()
    const [data, setData] =useState({ 
        username:"", 
        password:""
    })
    // const [loginFormValues, setLoginFormValues] = useState({ username: "", password: "" })

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    
    // const submitHandler = (e) => {
    //     e.preventDefault()// to prevent anything pending
    //     if(loginFormValues.username === data.username && loginFormValues.password === data.password){
    //         // navigate('/')
    //        alert("login Successful")
    //     }
    //     else{
    //         alert("Enter valid details")
    //     }       
    // }
    const { username,password } = data;
    const submitHandler = e => {
        e.preventDefault();
        addDataToServer(data)
    }

    const addDataToServer = (cred) => {
        console.log(cred);
        axios.post("http://localhost:8080/api/auth/login", cred).then(
            (response) => {
                
                console.log(response);
                // alert("user signed in Successfully");
                if (response.status==200) {
                  console.log("navigating");
                  navigate('/');
              }
            }, (error) => {
                console.log(error);
                alert("Operation failed");
            }
        );
    }


    return (
        <div className='register-container'>
            <form >
                <h1>Login</h1>
                <label>Username</label>
                <br />
                <input type="text" name="username" placeholder='Enter username' value={username} onChange={changeHandler} />
                <br />
                <label>Password</label>
                <br />
                <input type="password" name="password" placeholder='Enter Password' value={password} onChange={changeHandler} />
                <br />
                <button className='signup-button' onClick={submitHandler} id="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
