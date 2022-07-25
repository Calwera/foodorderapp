import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [totAmount, setTotalAmount] = useState(0);
  const [itemTotal, setItemTotal] = useState([]);
  return (
    <CartContext.Provider
      value={{
        totalAmount: totAmount,
        addComp: setTotalAmount,
        addItem: setItemTotal,
        items: itemTotal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
