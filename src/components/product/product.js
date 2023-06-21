import React from "react";
import classes from "./product.module.css";
const Product = ({ products }) => {
  const productItem = products.data?.map((item) => {
    return (
      <div className={classes.product}>
        <img src={item.picture} />
        <h3>{item.title}</h3>
        <div>{item.rating}</div>
        <p>{item.price}</p>
      </div>
    );
  });
  return productItem;
};

export default Product;
