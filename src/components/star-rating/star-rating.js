import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import classes from "./star-rating.module.css";
const StarRating = (props) => {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        let ratingValue = i + 1;

        return (
          <span className={classes.star} key={i}>
            <FaStar
              style={{
                color:
                  Math.round(props.rating) >= ratingValue ? "#ffe101" : "#ccc",
              }}
            />
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
