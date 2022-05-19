import { useState } from "react";

import { Fragment } from "react"; 
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({setShowModal}) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <span className={classes.border} onClick={() => setShowModal(true)}>
        <HeaderCartButton/>
        </span>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="foodImg" />
      </div>
    </Fragment>
  );
};
export default Header;
