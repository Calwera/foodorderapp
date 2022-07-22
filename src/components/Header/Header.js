import React, { Fragment } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../../img/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowModal} />
      </header>
      <div className={styles.mainimage}>
        <img src={mealsImage} alt="a table full of delicious food!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
