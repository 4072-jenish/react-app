export const addToCartAsync = (product) => {
    return {
      type: "ADD_TO_CART",
      payload: product,
    };
  };
  
  export const removeFromCartAsync = (id) => {
    return {
      type: "REMOVE_FROM_CART",
      payload: id,
    };
  };