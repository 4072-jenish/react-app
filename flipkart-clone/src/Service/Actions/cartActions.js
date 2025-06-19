export const addToCartAsync = (product) => (dispatch, getState) => {
  const existing = getState().cart.find((item) => item.id === product.id);
  if (existing) {
    dispatch({ type: "INCREASE_QUANTITY", payload: product.id });
  } else {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  }
};

export const removeFromCartAsync = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};

export const increaseQuantity = (id) => ({
  type: "INCREASE_QUANTITY",
  payload: id,
});

export const decreaseQuantity = (id) => ({
  type: "DECREASE_QUANTITY",
  payload: id,
});
