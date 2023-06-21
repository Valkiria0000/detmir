import React from "react";

const Product = (props) => {
  console.log(props);
  return <div>{props.products.title}</div>;
};

export default Product;
