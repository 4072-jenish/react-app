export const placeOrder = (items) => ({
    type: "PLACE_ORDER",
    payload: items
  });
  
  export const clearCart = () => ({
    type: "CLEAR_CART"
  });
  