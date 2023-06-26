import React from "react";
import { Link } from "react-router-dom";
import classes from "./product-item.module.css";
import StarRating from "../star-rating/star-rating";
import { paths } from "../../paths";

const ProductItem = ({ product }) => {
  return (
    <Link to={`${paths.product}/${product.id}`} className={classes.product}>
      <img src={product.picture} alt={product.title} />
      <h3>{product.title}</h3>
      <StarRating rating={product.rating} />
      <p>{product.price} ₽</p>
    </Link>
  );
};

export default ProductItem;
