import React from "react";
import classes from "./order-page.module.css";
import { useSelector } from "react-redux";
const OrderPage = (props) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  if (items.length < 1) {
    return <h1>Ваша корзина пуста</h1>;
  }
  return <div className={classes.order}>orderpage</div>;
};

export default OrderPage;
