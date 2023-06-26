import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./product-page.module.css";
import ProductInfo from "../../components/product-info/product-info";
import { Markup } from "interweave";
import ReturnPage from "../../components/return-page/return-page";
import { useParams } from "react-router";
import { getProduct } from "../../redux/product/reducer";
import Loader from "../../components/loader/loader";

const ProductPage = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    product && (
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
    )
  );
};

export default ProductPage;
