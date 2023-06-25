import React from "react";
import Button from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";

export const ProductBye = ({ products }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemsInCart = items.some((item) => item.id === products.id);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemsInCart) {
      dispatch(deleteItemFromCart(products.id));
    } else {
      dispatch(setItemInCart(products));
    }
  };
  return (
    <Button onClick={handleClick}>
      {isItemsInCart ? "Удалить" : "Добавить в корзину"}
    </Button>
  );
};

export default ProductBye;
