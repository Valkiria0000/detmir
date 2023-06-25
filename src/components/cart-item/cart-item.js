import React from "react";
import classes from "./cart-item.module.css";

const CartItem = ({ product }) => {
  return (
    <div className={classes.items}>
      <img src={product.picture} alt={product.category} />
      <span>{product.category}</span>
      <span className={classes.price}>{product.price} ₽</span>
    </div>
  );
};

export default CartItem;
