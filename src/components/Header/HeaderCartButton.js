import React from "react";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button onClick={props.onClick} className={styles.button}>
      <div className={styles.icon}>
        <CartIcon />
      </div>
      <div>Your Cart</div>
      <div className={styles.badge}>0</div>
    </button>
  );
};

export default HeaderCartButton;
