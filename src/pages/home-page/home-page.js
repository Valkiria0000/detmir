import React, { useEffect, useState } from "react";
import classes from "./home-page.module.css";
import axios from "axios";
import Product from "../../components/product/product";
import Loader from "../../components/loader/loader";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchProducts() {
    setLoading(true);
    const response = await axios.get(
      "https://skillfactory-task.detmir.team/products?page=1&limit=10"
    );
    setProducts(response.data);
    setLoading(false);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className={classes.home}>
      {loading && <Loader />}
      <Product products={products} />
    </section>
  );
};
