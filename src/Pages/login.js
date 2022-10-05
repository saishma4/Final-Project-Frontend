import React, { useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import './registration.css'
import './login.css'
import axios from 'axios';

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate()

    const loginData = {"username": username,"password": password}

    const errors = {
        pass: "invalid username/password"
      };

    const userLogin = (e) => {
        e.preventDefault();
        authenticateUser(loginData)
    }
    const setCookie= (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      const authenticateUser = (data) => {
        console.log(data);
        axios.post("http://localhost:8080/api/auth/login", data).then(
            (response) => {
                
                console.log(response);
                if (response.status===200) {
                    console.log("navigating");
                    setCookie("accessToken",response.data.accessToken,1);
                    setIsSubmitted(true);
                    window.location.href = '/';
                    
                }
            }, (error) => {
              setErrorMessages({ name: "pass", message: errors.pass });
            }
        );
    }

    const onInputChangeUsername = event => {
        setUserName(event.target.value)
    }
    
    const onInputChangePassword = event => {
        setPassword(event.target.value)
    }
    
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const renderForm=(
        <div className='register-container'>
            <form >
                <h1>Login</h1>
                <label htmlFor="loginUser">User Name</label>
                <br />
                <input type="text" name="uname" placeholder='Enter username' value={username} onChange={e => onInputChangeUsername(e)} required />
                {renderErrorMessage("uname")}
                <br />
                <label htmlFor="loginPassword">Password</label>
                <br />
                <input type="password" name="pass" placeholder='Enter Password' value={password} onChange={e => onInputChangePassword(e)} required/>
                {renderErrorMessage("pass")}
                <br />
                <button type="submit" className='signup-button'value="Login" onClick={userLogin} id="submit">Login</button>
                <div className='forgotpassword'>Forgot Password?</div>
            </form>
        </div>
    );

    return (
        <div>
            {isSubmitted ? navigate("/") : renderForm}
        </div>
        
    );
}

export default Login;
