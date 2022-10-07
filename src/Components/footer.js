import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Footer = () =>{
    return(
    <>
    <div className="footer-container" >
        <p>&copy; 2022
        <Link to="/">dollza</Link>
        </p>
        <ul>
            
            <li>
                <a href="/aboutus">about Us</a>
                <a href="/contactus">contact Us</a>
            </li>
        </ul>
    </div>
    </>
    );
}
export default Footer;