import React from "react";
import { useParams } from "react-router-dom";
import { dolls } from "./constants";
import "./DollDetailPage.css";
import doll8 from '../Images/doll8.png';

const getDollDetailsById = (id) => {
  return dolls.find((doll) => doll.id === id);
};

const DollDetailPage = () => {
  const params = useParams();

  const dollId = Number(params.id);

  const dollDetails = getDollDetailsById(dollId);

  return dollDetails ? (
    <div className="dollDetailPage">
      <div className="imgContainer">
        <img
          src={doll8}
          className="dollImg"
        />
      </div>
      <div className="rightContainer">
        <div className="rightInnerContainer">
          <h3>Name</h3>
          <div>{dollDetails.name}</div>
          <h3>Product description</h3>
          <div>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </div>
          <h3>Price</h3>
          <div>Rs. {dollDetails.price}/-</div>
          <div className="addToCartBtn">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default DollDetailPage;
