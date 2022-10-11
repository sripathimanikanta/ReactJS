import React, { useState } from "react";
import "./css/cart.css";
import img_thumb from "./Assets/image-product-1-thumbnail.jpg";
import img_thumb_2 from "./Assets/image-product-2-thumbnail.jpg";

export default function Cart({ price, count }) {
  let cartItems = [
    {
      id: 1,
      img: img_thumb,
      cartHeading: "Autumn Limited Edition",
      cartPrice: price.offerPrice,
      noOfItems: count,
      finalPrice: price.offerPrice * count,
    }
    // {
    //   id: 2,
    //   img: img_thumb_2,
    //   cartHeading: "Fall Limited Edition",
    //   cartPrice: price.offerPrice,
    //   noOfItems: count,
    //   finalPrice: price.offerPrice * count,
    // },
  ];
  console.log("before inside Cart function",cartItems);

  let [cartItem, setCartItem] = useState(cartItems);
  console.log("after inside Cart function cartItems",cartItems);
  console.log("after inside Cart function cartitem",cartItem);

  // function remover(id){
  //   console.log(id);
  //   setCartItem((oldvals) => {
  //     return (oldvals.filter((arr, index) => {
  //       console.log(arr, index);
  //       return arr[index].id !== id;
  //     }))
  //   })
  // }

  return (
    <div className="Cart">
      <div className="cart-heading">
        Cart <br />
      </div>
      <hr />

      <CartItems Items={cartItems} />
    </div>
  );
}

let CartItems = (props) => {
  // if(props.Items.length === 0)
  console.log("inside cartitems",props.Items);
  return (
    <>
      {props.Items.map((e) => {
        if(e.noOfItems == 0){
          return <div className="no-items">Your Cart is empty</div>
        }
        else{
        console.log("hello", e.id);
        return (
          <>
            <div className="cart-items" key={e.id}>
              <img src={e.img} alt="" />
              <div className="cart-content">
              <div className="cart-heading">{e.cartHeading}</div>
              <div className="price-row">
                <span className="cart-price">${e.cartPrice}</span>
                <span className="operator">x</span>
                <span className="multiple">{e.noOfItems}</span>
                <span className="final-price">${e.finalPrice}</span>
              </div>
              </div>
              <svg
            // onClick={() => {props.remover(e.id)}}
            className="delete"
            width="14"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                id="a"
              />
            </defs>
            <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
          </svg>
            </div>
          </>
        );
      }
      })}
    </>
  );
}
