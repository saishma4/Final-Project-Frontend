import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import WebFont from 'webfontloader';
import { useEffect } from "react";

const Navbar = () => {
    const getCookie = (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

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
                            <a href="/dolls">Dolls</a>
                            <a href="#">Orders</a>
                            <a href="/cart">Cart</a>
                            <a href="/" onClick={signoutHandler}>Logout</a>
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
                            <a href="/dolls">Dolls</a>
                            <Link to="/registration">Register </Link>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            }

        </div>
    );

}
export default Navbar;