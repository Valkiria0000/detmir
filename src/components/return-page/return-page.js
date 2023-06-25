import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router";
import classes from "./return-page.module.css";
const ReturnPage = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className={classes.return} onClick={handleClick}>
      <HiOutlineArrowNarrowLeft /> <span>Назад</span>
    </div>
  );
};

export default ReturnPage;
