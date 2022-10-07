import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import WebFont from 'webfontloader';
import { useEffect } from "react";
import getCookie from "./utils";

const Navbar = () => {

    const signoutHandler = () => {
        console.log("logout")
        console.log(window.location);
        document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '/';
    }

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Droid Sans', 'Alkalami']
            }
        });
    }, []);
    return (
        <div>
            {getCookie("accessToken") &&
                <nav className="nav">
                    <div className="logo"><img
                        src="https://mystickermania.com/cdn/stickers/noob-pack/cute-smiling-unicorn-512x512.png"
                        alt="absolute url" />
                        <Link to="/" className="site-title" style={{ fontFamily: 'Alkalami' }}>dollza</Link>
                    </div>
                    <ul>
                        <li>
                            <a href="/dolls">dolls</a>
                            <a href="/cart">cart</a>
                            <a href="/" onClick={signoutHandler}>logout</a>
                        </li>
                    </ul>
                </nav>
            }
            {!(getCookie("accessToken")) &&
                <nav className="nav">
                    <div className="logo"><img
                        src="https://mystickermania.com/cdn/stickers/noob-pack/cute-smiling-unicorn-512x512.png"
                        alt="absolute url" />
                        <Link to="/" className="site-title" style={{ fontFamily: 'Alkalami' }}>dollza</Link>
                    </div>
                    <ul>
                        <li>
                            <a href="/dolls">dolls</a>
                            <Link to="/registration">register </Link>
                            <Link to="/login">login</Link>
                        </li>
                    </ul>
                </nav>
            }

        </div>
    );

}
export default Navbar;