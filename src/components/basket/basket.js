import React from "react";

import classes from "./basket.module.css";
import { FaShoppingCart } from "react-icons/fa";
const Basket = (props) => {
  return (
    <div className={classes.cart}>
      <FaShoppingCart />
      <span>Корзина (12)</span>
    </div>
  );
};

export default Basket;
