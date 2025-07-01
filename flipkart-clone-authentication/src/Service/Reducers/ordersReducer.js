const orderReducer = (state = [], action) => {
    switch (action.type) {
      case "PLACE_ORDER":
        return [...state, { id: Date.now(), items: action.payload }]; 
      default:
        return state;
    }
  };
  export default orderReducer;
  