import React from "react";

import { Outlet, Link } from "react-router-dom";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <Outlet />
            <footer>
                <Footer/>
            </footer>
        </>
    )
};

export default Layout;