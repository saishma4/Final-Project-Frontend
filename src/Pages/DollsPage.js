import React, { useState, useEffect } from "react";
import './DollsPage.css';
import axios from "axios";

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
  const handleSubmit = (e) => {
    e.preventDefault()
    saveDoll(dolls)

  }
  const saveDoll = (doll) => {
    axios.post("http://localhost:8080/api/auth/add_doll", doll.dollname,doll.price)
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
        <div className="filterContainer">
          <button>Filter</button>
        </div>
        <div className="dollsList">
          {dolls &&
            dolls.map((doll) => {
              return (
                <div key={doll.id} className="dollCard">
                  <img
                    src={doll.dollImage}
                    className="dollImage"
                  />
                  <div>
                    {doll.dollname} - Rs. {doll.price}/-
                  </div>
                  <button onClick={handleSubmit}>Add to cart</button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DollsPage;
