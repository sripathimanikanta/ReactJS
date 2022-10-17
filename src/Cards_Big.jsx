import React, { useState } from "react";
import img_hero_1 from "./Assets/image-product-1.jpg";
import img_hero_2 from "./Assets/image-product-2.jpg";
import img_hero_3 from "./Assets/image-product-3.jpg";
import img_hero_4 from "./Assets/image-product-4.jpg";
import img_hero_1_thumb from "./Assets/image-product-1-thumbnail.jpg";
import img_hero_2_thumb from "./Assets/image-product-2-thumbnail.jpg";
import img_hero_3_thumb from "./Assets/image-product-3-thumbnail.jpg";
import img_hero_4_thumb from "./Assets/image-product-4-thumbnail.jpg";
// import "./css/cards.css";
import "./css/cards_big.css";

const Card = ({closeup}) => {
  let [imageNoCurrent, setImageNo] = useState(0);
  const images = [img_hero_1, img_hero_2, img_hero_3, img_hero_4];

  function NextImg() {
    if (imageNoCurrent < images.length - 1) {
      setImageNo(imageNoCurrent + 1);
    } else {
      console.log("nothing");
    }
  }

  function PrevImg() {
    if (imageNoCurrent > 0) {
      setImageNo(imageNoCurrent - 1);
    } else {
      console.log("nothing");
    }
  }

  function goToThatImages(id) {
    document.getElementsByClassName("hero-img-thumb")[
      imageNoCurrent
    ].style.border = "none";
    document.getElementsByClassName("hero-img-thumb")[id].style.border =
      "black solid 2px";
    setImageNo(id);
  }

  return (
    <div className="card-big">
      <div className="cards-containers">
        <div className="hero-img-div">
          <svg className="closer" onClick={closeup} width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
          <svg
            onClick={PrevImg}
            className="hero-img-buttons button-lefts"
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
          <img className="hero-img" src={images[imageNoCurrent]} alt="" />
          <svg
            onClick={NextImg}
            className="hero-img-buttons button-rights"
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div className="hero-img-thumb-container">
          <img
            className="hero-img-thumb"
            onClick={() => goToThatImages(0)}
            src={img_hero_1_thumb}
            alt=""
          />
          <img
            className="hero-img-thumb"
            onClick={() => goToThatImages(1)}
            src={img_hero_2_thumb}
            alt=""
          />
          <img
            className="hero-img-thumb"
            onClick={() => goToThatImages(2)}
            src={img_hero_3_thumb}
            alt=""
          />
          <img
            className="hero-img-thumb"
            onClick={() => goToThatImages(3)}
            src={img_hero_4_thumb}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
