const initialState = {
  search: '',
  category: '',
  priceRange: [0, Infinity],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    case 'SET_PRICE_RANGE':
      return { ...state, priceRange: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
