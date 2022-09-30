import React from "react";
import './style.css';
import {Link } from "react-router-dom";
import WebFont from 'webfontloader';
import { useEffect } from "react";

const Navbar = () =>{
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Alkalami']
          }
        });
       }, []);
    return(
    <nav className="nav">
        <Link to="/" className="site-title" style={{fontFamily: 'Alkalami'}}>dollza</Link>
        <ul>
            <li>
                <a href="#">Dolls</a>
                <a href="#">Orders</a>
                <Link to="/registration">Register </Link>
                <Link to="/login">Login</Link>
                <a href="#">Cart</a>
            </li>
        </ul>
    </nav>
    );

}
export default Navbar;