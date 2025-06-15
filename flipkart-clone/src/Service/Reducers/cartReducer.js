const saved = JSON.parse(localStorage.getItem('cart')) || [];

export default function cartReducer(state = saved, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const added = [...state, action.payload];
      localStorage.setItem('cart', JSON.stringify(added));
      return added;
    case 'REMOVE_FROM_CART':
      const removed = state.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(removed));
      return removed;
    default:
      return state;
  }
}
