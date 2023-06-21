import React, { useEffect, useState } from "react";
import classes from "./home-page.module.css";
import axios from "axios";
import Product from "../../components/product/product";

export const HomePage = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await axios.get(
      "https://skillfactory-task.detmir.team/products?page=1&limit=10"
    );
    setProducts(response.data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={classes.home}>
      <Product products={products.data[0]} />
    </div>
  );
};
