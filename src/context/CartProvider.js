import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [totAmount, setTotalAmount] = useState(0);

  return (
    <CartContext.Provider
      value={{ totalAmount: totAmount, addComp: setTotalAmount }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
