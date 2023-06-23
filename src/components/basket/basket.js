import React from "react";

import classes from "./basket.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartMenu from "../cart-menu/cart-menu";
import { useSelector } from "react-redux";

const Basket = (props) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <div className={classes.cart}>
      <FaShoppingCart />
      <span className={classes.basket}>Корзина (12)</span>
      <CartMenu items={items} onClick={() => null} />
    </div>
  );
};

export default Basket;
