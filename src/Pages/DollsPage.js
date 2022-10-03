import React from "react";
import { dolls } from "./constants";
import "./DollsPage.css";
import doll8 from '../Images/doll8.png';

const DollsPage = () => {
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
                    src={doll8}
                    className="dollImg"
                  />
                  <div>
                    {doll.name} - Rs. {doll.price}/-
                  </div>
                  <button>Add to cart</button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DollsPage;
