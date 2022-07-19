import React, { useState } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import Input from "../UI/Input";

const MealItem = (props) => {
  const [isMeal, setIsMeal] = useState(0);
  const addMealto = () => {
    console.log("dzialam kurwa");
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <p className={classes.description}>{props.meal.description}</p>
        <p className={classes.price}>{props.meal.price}</p>
      </div>
      <div>
        <Input />
        <MealItemForm
          onClick={() => {
            console.log("dziala?");
          }}
        />
      </div>
    </li>
  );
};

export default MealItem;
