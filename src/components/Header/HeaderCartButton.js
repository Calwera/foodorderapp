import React, { useContext } from "react";
import CartContext from "../../context/cart-context";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  return (
    <button onClick={props.onClick} className={styles.button}>
      <div className={styles.icon}>
        <CartIcon />
      </div>
      <div>Your Cart</div>
      <div className={styles.badge}>{ctx.totalAmount}</div>
    </button>
  );
};

export default HeaderCartButton;
