import React from "react";
import classes from "./home-page.module.css";
import Products from "../../components/products/products";

export const HomePage = () => {
  return (
    <section className={classes.home}>
      <Products />
    </section>
  );
};
