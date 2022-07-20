import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const quantityChangeHandler = (event) => {
    props.quantity(event.target.value);
  };
  return (
    <div className={classes.input}>
      <label htmlFor="quantity">Amount</label>
      <input
        onChange={quantityChangeHandler}
        id="quantity"
        placeholder="1"
        type="number"
      ></input>
    </div>
  );
};

export default Input;
