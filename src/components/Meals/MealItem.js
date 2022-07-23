import React, { useState, useContext, createContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import Input from "../UI/Input";
import CartContext from "../../context/cart-context";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.meal.price.toFixed(2)}`;
  const [isMeal, setIsMeal] = useState(0);
  const [isAmount, setAmount] = useState(0);
  const setQuantity = (amount) => {
    setAmount(amount);
  };
  const addMealto = () => {
    setIsMeal(() => {
      return isMeal + +isAmount;
    });
    ctx.addComp((numb) => {
      return [+numb + 1];
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <p className={classes.description}>{props.meal.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <Input
          quantity={setQuantity}
          label="Amount"
          input={{
            id: "amount_" + props.meal.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <MealItemForm onCustomClick={addMealto} />
      </div>
    </li>
  );
};

export default MealItem;
