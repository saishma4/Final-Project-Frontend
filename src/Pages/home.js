import React from "react";

import doll1 from '../Images/doll1.png';
import doll2 from '../Images/doll2.png';
import doll3 from '../Images/doll3.png';
import './home.css'

const Home = () => {
    return(
        <>
        <div className="container">
        <h1 class="slogan">Discover One-of-a-Kind Dolls</h1>
            <div className="first-container">
            </div>
            
            <div className="flex-container">
                <div>
                <img src={doll1} alt="Doll Image"/>
                <h3>Cool Girl</h3>
                <h3>Rs.3,400</h3>
                <button>Add to cart</button>
                </div>
                <div><img src={doll2} alt="Doll Image"/>
                <h3>Unicorn</h3>
                <h3>Rs.5360</h3>
                <button>Add to cart</button>
                </div>
                <div><img
                src={doll3}
                alt="Doll Image"/>
                <h3>Paris Fashion Girl</h3>
                <h3>Rs.4600</h3>
                <button>Add to cart</button>
                </div>
            </div>
        </div>
        </>

    ) 

};

export default Home;