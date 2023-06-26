import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/reducer";
import Loader from "../loader/loader";
import ProductItem from "../product-item/product-item";
import classes from "./products.module.css";
const Products = () => {
  const dispatch = useDispatch();

  const { products, isLoading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={classes.products}>
      {products &&
        products.data.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Products;
