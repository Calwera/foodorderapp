import React, { Fragment } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../../img/meals.jpg";

const Header = () => {
  return (
    <Fragment>
      <div className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </div>
      <div className={styles.mainimage}>
        <img src={logo}></img>
      </div>
    </Fragment>
  );
};

export default Header;
