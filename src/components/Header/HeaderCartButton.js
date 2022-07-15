import React from "react";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
const HeaderCartButton = () => {
  return (
    <div className={styles.button}>
      <CartIcon className={styles.icon} />
      <span>Your Cart</span>
      <div className={styles.badge}>0</div>
    </div>
  );
};

export default HeaderCartButton;
