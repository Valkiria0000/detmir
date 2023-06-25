import React from "react";
import { useSelector } from "react-redux";
import classes from "./product-page.module.css";
import StarRating from "../../components/star-rating/star-rating";
import ProductBye from "../../components/product-bye/product-bye";
import ProductInfo from "../../components/product-info/product-info";
const ProductPage = (props) => {
  const product = useSelector((state) => state.products.currentProducts);
  if (!product) return null;
  console.log(product);
  return (
    <div key={product.id} className={classes.page}>
      <div className={classes.product}>
        <img
          className={classes.picture}
          src={product.picture}
          alt={product.title}
        />
        <div className={classes.info}>
          <h3>{product.title}</h3>
          <StarRating rating={product.rating} />
          <p>{product.price} ₽</p>
          <ProductBye products={product} />
          <ProductInfo />
        </div>
      </div>
      <div className={classes.product}>{product.description}</div>
    </div>
  );
};

export default ProductPage;
