import CartContext from "./cart-context";

const CartProvider = () => {
  <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartProvider;
