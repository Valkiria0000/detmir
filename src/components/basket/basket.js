import React from "react";
import Icon from "../../assets/basket.svg";
const Basket = (props) => {
  return (
    <div>
      <img src={Icon} alt="cart" />
      Корзина
    </div>
  );
};

export default Basket;
