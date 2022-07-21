import React from "react";

import classes from "./Cart.module.css";

const Cart = () => {
  const orderFood = () => {
    console.log("Ordering...");
  };

  return (
    <div>
      <ul className={classes.total}>
        <li className={classes["cart-items"]}>
          <div>Schniteck</div>
          <div>122$</div>
        </li>
        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </ul>

      <div>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]}>Close</button>
          <button className={classes.button} onClick={orderFood}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
