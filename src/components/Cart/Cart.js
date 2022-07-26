import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
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
  const totalPrice = <span>${cartCtx.totalAmount.toFixed(2)}</span>;
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
