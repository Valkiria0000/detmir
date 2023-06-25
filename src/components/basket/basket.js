import React, { useState } from "react";

import classes from "./basket.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartMenu from "../cart-menu/cart-menu";
import { useSelector } from "react-redux";

const Basket = (props) => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <div
      className={classes.cart}
      onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
    >
      <FaShoppingCart />
      <span className={classes.basket}>Корзина ({items.length})</span>
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};

export default Basket;
