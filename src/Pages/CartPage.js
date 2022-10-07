import React, { useState, useEffect } from "react";
import { cartItems } from "./constants";
import axios from "axios";
import getCookie from "../Components/utils";
import { Outlet, Link, useNavigate } from "react-router-dom";
import './cartPage.css';


const CartPage = () => {
  const navigate = useNavigate()
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/cart")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('called get items')
          console.log(result)
          setcartItems(result);
        }
      )
  }, [])

  let totalCartValue = 0;

  cartItems.forEach(
    (item) =>
      (totalCartValue = totalCartValue + Number(item.price))
  );

  return (
    <div>
      <div className="yourcart">
        <h1 >Your Cart</h1></div>
      {getCookie("accessToken") &&
        <div className="cartPage">  
          <div className="leftContainer">
            <div className="cartItems">
              {cartItems &&
                cartItems.map((item) => {
                  return (
                    <div key={item.id}>
                      {item.dollname}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="rightContainer">
            <div className="cartItems">
              {cartItems &&
                cartItems.map((item) => {
                  return (
                    <div key={item.id}>
                      Rs. {Number(item.price)}
                    </div>
                  );
                })}
              <h4>Total amount</h4>
              <div>Rs. {totalCartValue}</div>
              <Link to="/payment"><button>CheckOut</button></Link>
            </div>
          </div>
        </div>
      }
      {!(getCookie("accessToken")) &&
        navigate('/login')
      }
      </div>
  );
};

export default CartPage;