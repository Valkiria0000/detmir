import React from "react";
import StarRating from "../star-rating/star-rating";
import ProductBye from "../product-bye/product-bye";
import ProductText from "../product-text/product-text";
import classes from "./product-info.module.css";
const ProductInfo = ({ product }) => {
  return (
    <div className={classes.info}>
      <h3>{product.title}</h3>
      <StarRating rating={product.rating} />
      <p>{product.price} ₽</p>
      <ProductBye products={product} />
      <ProductText />
    </div>
  );
};

export default ProductInfo;
