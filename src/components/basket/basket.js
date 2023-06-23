import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import classes from "./basket.module.css";
import { FaShoppingCart } from "react-icons/fa";
const Basket = (props) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = items.reduce((acc, product) => (acc += product.price), 0);
  return (
    <div className={classes.cart}>
      <FaShoppingCart />
      <span>Корзина ({totalPrice})</span>
    </div>
  );
};

export default Basket;
