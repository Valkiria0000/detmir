import React from "react";
import Logo from "../../assets/Logo.svg";
import Cart from "../cart/cart";

import classes from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ links }) => {
  const linksItem = links.map((link) => {
    return (
      <li key={link.id}>
        <NavLink
          to={link.path}
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          {link.link}
        </NavLink>
      </li>
    );
  });

  return (
    <header className={classes.header}>
      <img src={Logo} alt="logo" />
      <nav>
        <ul className={classes.list}>{linksItem}</ul>
      </nav>
      <Cart />
    </header>
  );
};

export default Header;
