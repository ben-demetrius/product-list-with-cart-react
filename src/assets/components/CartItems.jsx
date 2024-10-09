import React from "react";
// import "./cart-items.scss";
import { items } from "../data";
import CartItem from "./CartItem";

const CartItems = () => {
  const cards = items.map((item, i) => {
    return (
      <CartItem
        key={i}
        imageFileName={item.image.desktop}
        name={item.name}
        category={item.category}
        price={item.price}
      />
    );
  });
  return <div className="cart-main--items">{cards}</div>;
};

export default CartItems;
