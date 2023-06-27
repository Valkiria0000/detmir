import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/reducer";
import Loader from "../loader/loader";
import ProductItem from "../product-item/product-item";
import classes from "./products.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);

  const srcollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };
  useEffect(() => {
    dispatch(getProducts(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    document.addEventListener("scroll", srcollHandler);
    return function () {
      document.removeEventListener("scroll", srcollHandler);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={classes.products}>
      {products &&
        products.data.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            style={{ transition: 1 }}
          />
        ))}
    </div>
  );
};

export default Products;
