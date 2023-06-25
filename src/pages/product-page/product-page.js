import React from "react";
import { useSelector } from "react-redux";
import classes from "./product-page.module.css";
import ProductInfo from "../../components/product-info/product-info";
import { Markup } from "interweave";
import ReturnPage from "../../components/return-page/return-page";

<Markup content="This string <b>contains</b> HTML." />;
const ProductPage = (props) => {
  const product = useSelector((state) => state.products.currentProducts);
  if (!product) return null;

  return (
    <div key={product.id} className={classes.page}>
      <ReturnPage />
      <div className={classes.product}>
        <img
          className={classes.picture}
          src={product.picture}
          alt={product.title}
        />
        <ProductInfo product={product} />
      </div>
      <div className={classes.description}>
        <span>Описание</span>
        <Markup content={product.description} />
      </div>
    </div>
  );
};

export default ProductPage;
