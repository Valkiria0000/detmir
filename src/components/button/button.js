import React from "react";

const Button = ({ onClick, type, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
