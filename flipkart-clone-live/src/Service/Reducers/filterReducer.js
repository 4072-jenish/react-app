const initialState = {
  search: '',
  category: '',
  priceRange: [0, Infinity],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_BY_NAME": {
      const filters = { ...state.filters, name: action.payload };
      return {
        ...state,
        filters,
        filtered: applyFilters(state.all, filters),
      };
    }
    
    case "FILTER_BY_CATEGORY": {
      const filters = { ...state.filters, category: action.payload };
      return {
        ...state,
        filters,
        filtered: applyFilters(state.all, filters),
      };
    }
      return { ...state, products: filtered, category: action.payload };
    case 'SET_PRICE_RANGE':
      return { ...state, priceRange: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
