import React from "react";
import Icon from "../../assets/basket.svg";
import classes from "./basket.module.css";
const Basket = (props) => {
  return (
    <div className={classes.cart}>
      <img src={Icon} alt="cart" />
      <span>Корзина (12)</span>
    </div>
  );
};

export default Basket;
