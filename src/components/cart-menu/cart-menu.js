import React from "react";
import classes from "./cart-menu.module.css";
import CartItem from "../cart-item/cart-item";
import CartTotal from "../cart-total/cart-total";
const CartMenu = ({ items, product, onClick }) => {
  return (
    <div className={classes.menu}>
      <div className={classes.list}>
        {items.length > 0
          ? items.map((product) => {
              return <CartItem product={product} key={product.id} />;
            })
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? <CartTotal items={items} onClick={onClick} /> : null}
    </div>
  );
};

export default CartMenu;
