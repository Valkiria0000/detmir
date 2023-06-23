import React from "react";
import Button from "../button/button";
import classes from "./cart-menu.module.css";
const CartMenu = ({ items, onClick }) => {
  const totalPrice = items.reduce((acc, product) => (acc += product.price), 0);
  return (
    <div className={classes.menu}>
      <div className={classes.list}>
        {items.length > 0
          ? items.map((product) => {
              return (
                <div className={classes.items}>
                  <img src={product.picture} alt={product.category} />
                  <span>{product.category}</span>
                  <span className={classes.price}>{product.price} ₽</span>
                </div>
              );
            })
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className={classes.price}>
          <div className={classes.total}>
            <span>Итого</span>
            <span>{totalPrice} ₽</span>
          </div>
          <Button onClick={onClick}>Оформить заказ</Button>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
