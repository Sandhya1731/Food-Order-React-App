import CartContext from "./cart-context";
function CartProvider(props) {
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
