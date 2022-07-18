import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <p className={classes.description}>{props.meal.description}</p>
        <p className={classes.price}>{props.meal.price}</p>
      </div>
      <div className={classes.form}>
        <label htmlFor="quantity">Amount</label>
        <input type="number" id="quantity" placeholder="1"></input>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
