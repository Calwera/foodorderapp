import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const totalPrice = (
    <span>
      $
      {ctx.items
        .reduce((acc, item) => {
          return acc.price + item.price;
        })
        .toFixed(2)}
    </span>
  );
  const orderFood = () => {
    console.log("Ordering...");
  };

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        {totalPrice}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClick} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button} onClick={orderFood}>
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
