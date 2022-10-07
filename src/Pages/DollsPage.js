import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import './DollsPage.css';
import axios from "axios";
import getCookie from "../Components/utils";

const DollsPage = () => {

  const [dolls, setDolls] = useState([]);
  const [error, setError] = useState(null);



  useEffect(() => {
    fetch("http://localhost:8080/api/auth/dolls")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('called get items')
          console.log(result)
          setDolls(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])
  
  const saveDoll = (data) => {
    axios.post("http://localhost:8080/api/auth/add_doll",data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="dollsPage">
      <h1 className="dollsHeading">Dolls</h1>
      <div className="dollsPageContainer">
        {/* <div className="filterContainer">
          <button>Filter</button>
        </div> */}
        <div className="dollsList">
          {dolls &&
            dolls.map((doll) => {
              return (
                <div key={doll.id} className="dollCard">
                  <img
                    src={doll.dollImage}
                    className="dollImage"
                  />
                  <div className="productName">
                    {doll.dollname}
                  </div>
                  <div>
                    Rs.{doll.price}
                  </div>
                  <Link to="/cart"><button onClick={()=>saveDoll(doll)}>Add to cart</button></Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DollsPage;
