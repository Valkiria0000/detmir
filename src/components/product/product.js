import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StarRating from "../star-rating/star-rating";
import classes from "./product.module.css";
import { setCurrentProducts } from "../../redux/products/reducer";

const Product = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productItem = products.data?.map((item) => {
    const handleClick = () => {
      dispatch(setCurrentProducts(item));
      navigate(`/${item.id}`);
    };
    return (
      <div className={classes.product} key={item.id} onClick={handleClick}>
        <img src={item.picture} alt={item.title} />
        <h3>{item.title}</h3>
        <StarRating rating={item.rating} />
        <p>{item.price} ₽</p>
      </div>
    );
  });
  return productItem;
};

export default Product;
