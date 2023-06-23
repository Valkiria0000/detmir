import React from "react";
import Button from "../button/button";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";

export const ProductBye = ({ products }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(products));
  };
  return (
    <div>
      <Button onClick={handleClick}>bye</Button>
    </div>
  );
};

export default ProductBye;
