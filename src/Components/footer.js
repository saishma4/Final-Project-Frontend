import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Footer = () =>{
    return(
    <>
    <div className="footer-container" >
        <Link to="/" className="site-title">dollza</Link>
        <ul>
            <li>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </li>
            {/* <li>
            <h3>5th Floor,"B" block,Divyasree Omega,Kondapur,Hyderabad,Telangana 500084,INDIA</h3>
            <h3>Telephone:+914044721000</h3>
            <h3>Email:dollza@gmail.com</h3>
            </li> */}
        </ul>
    </div>
    </>
    );
}
export default Footer;