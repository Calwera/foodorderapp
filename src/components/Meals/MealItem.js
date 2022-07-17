import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
<
      {props.meal.map((item) => (
        <div className={classes.meal}>
        <h3>{item.name}</h3>
           <p className={classes.description}>{item.description}</p>
          <p className={classes.price}>{item.price}</p>
         </div>
      ))}
   
  );
};

export default MealItem;
// {props.meal.map((item) => {
//
// })
// }
