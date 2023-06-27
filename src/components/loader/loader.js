import React from "react";
import classes from "./loader.module.css";
import { FiLoader } from "react-icons/fi";
const Loader = (props) => {
  return (
    <div className={classes.loader}>
      <FiLoader className={classes.animate_loader} />

      <p>Подождите...</p>
    </div>
  );
};

export default Loader;
