import React from "react";
import classes from "./cart-total.module.css";
import Button from "../button/button";
const CartTotal = ({ items }) => {
  const totalPrice = items.reduce((acc, product) => (acc += product.price), 0);
  return (
    <div className={classes.price}>
      <div className={classes.total}>
        <span>Итого</span>
        <span>{totalPrice} ₽</span>
      </div>
      <Button>Оформить заказ</Button>
    </div>
  );
};

export default CartTotal;
