import React, { createContext, useEffect, useState } from "react";
// import img2 from "./Assets/icon-cart.svg";
// import minus from "./Assets/icon-minus.svg";
// import plus from "./Assets/icon-plus.svg";
import "./css/hero.css";
import Cards from "./Cards";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
// import Card from './Cards_Big';
import {IncreNum, DecreNum, DeleteNum} from './Actions/actions';

export default function Hero() {
  // let [count, setCount] = useState(0);
  let myState = useSelector((state) =>(state.changeTheNumber));
  let dispatch = useDispatch();

  // function IncNum() {
  //   setCount(count + 1);
  // }

  // function DecNum() {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // }

  let [y, z] = [50, 250];
  let price = {
    offerPrice: z * ((100 - y) / 100),
    offerPerc: y,
    aPrice: z,
  };

  let [addToCarts, setAddToCarts] = useState([price, 0]);
  // console.log(addToCarts);

  function addItToCart() {
    setAddToCarts([price, myState]);
    // document.querySelector(".add-cart").style.backgroundColor = "#ff7d1b";
    // document.querySelector(".add-cart").style.color = "white";
    // document.querySelector("svg").children[0].fill = "white";
    // console.log(document.querySelector("svg").children[0].fill);
  }


  function remov() {
    setAddToCarts([price, 0]);
    // setCount(0);
    dispatch(DeleteNum())
  }

  return (
    <>
      <section className="hero">
        <Cart price={addToCarts[0]} count={addToCarts[1]} remov={remov} />
        <Cards /> 
        <div className="hero-content">
          <div className="sneak-comp">SNEAKER COMPANY</div>
          <div className="heading">Fall Limited Edition Sneakers</div>
          <div className="descrip">
            These low-profile sneakers are your perfect casual wear
            companion.Featuring a durable rubber outer sole, they'll withstand
            everything the weather can offer.
          </div>
          <div className="pric-per-apr">
            <div className="price-perc">
              <span className="offer-price">${price.offerPrice}</span>
              <span className="offer-perc">{price.offerPerc}%</span>
            </div>
            <div className="price">${price.aPrice}</div>
          </div>
          <div className="cart-num_cart-button">
            <div className="cart-num">
              <span className="cart-buttons" onClick={() => dispatch(DecreNum(1))}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#ff7d1b"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
              </span>
              <span className="number" style={{ fontWeight: "bold" }}>
                {myState}
              </span>
              <span className="cart-buttons" onClick={() =>dispatch(IncreNum(1))}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#ff7d1b"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
                  />
                </svg>
              </span>
            </div>
            <div className="add-cart" onClick={addItToCart}>
              <span>
                <svg 
                width="22" 
                height="20" 
                xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="white"
                    fill-rule="nonzero"
                  />
                </svg>
              </span>
              Add to cart
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
