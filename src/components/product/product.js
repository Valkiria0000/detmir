import React from "react";
import classes from "./product.module.css";
import StarRating from "../star-rating/star-rating";
import ProductBye from "../product-bye/product-bye";

const Product = ({ products }) => {
  const productItem = products.data?.map((item) => {
    return (
      <div className={classes.product} key={item.id}>
        <img src={item.picture} alt={item.title} />
        <h3>{item.title}</h3>
        <StarRating rating={item.rating} />
        <p>{item.price} ₽</p>
        <ProductBye products={item} />
      </div>
    );
  });
  return productItem;
};

export default Product;
