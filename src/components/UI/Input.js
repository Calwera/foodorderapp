import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const quantityChangeHandler = (event) => {
    props.quantity(event.target.value);
  };
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input onChange={quantityChangeHandler} {...props.input}></input>
    </div>
  );
};

export default Input;
