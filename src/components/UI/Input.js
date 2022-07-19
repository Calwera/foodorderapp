import React from "react";

import classes from "./Input.module.css";

const Input = () => {
  return (
    <div className={classes.input}>
      <label htmlFor="quantity">Amount</label>
      <input id="quantity" placeholder="1" type="number"></input>
    </div>
  );
};

export default Input;
