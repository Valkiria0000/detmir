import React, { useCallback, useState } from "react";

import classes from "./basket.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartMenu from "../cart-menu/cart-menu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Basket = (props) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <div
      className={classes.cart}
      onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
    >
      <FaShoppingCart />
      <span className={classes.basket}>Корзина ({items.length})</span>
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};

export default Basket;
