import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <div className={styles.icon}>
        <CartIcon />
      </div>
      <div>Your Cart</div>
      <div className={styles.badge}>{numberOfCartItems}</div>
    </button>
  );
};

export default HeaderCartButton;
