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
        <div className="logo"><img 
        src="https://mystickermania.com/cdn/stickers/noob-pack/cute-smiling-unicorn-512x512.png"
        alt="absolute url"/>
        <Link to="/" className="site-title" style={{fontFamily: 'Alkalami'}}>dollza</Link>
        </div>
        <ul>
            <li>
                <a href="/dolls">Dolls</a>
                <a href="#">Orders</a>
                <Link to="/registration">Register </Link>
                <Link to="/login">Login</Link>
                <a href="/cart">Cart</a>
            </li>
        </ul>
    </nav>
    );

}
export default Navbar;