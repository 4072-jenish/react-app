const initialState = {
  items: []
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, items: action.payload };
    case 'ADD_PRODUCT':
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}
