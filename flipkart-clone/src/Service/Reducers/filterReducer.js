const initialState = {
  search: '',
  category: '',
  priceRange: [0, Infinity],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case "FILTER_BY_CATEGORY":
      if (action.payload === "") {
        return { ...state, products: state.allProducts, category: "" };
      }
      const filtered = state.allProducts.filter(
        (product) =>
          product.category.toLowerCase() === action.payload.toLowerCase()
      );
      return { ...state, products: filtered, category: action.payload };
    case 'SET_PRICE_RANGE':
      return { ...state, priceRange: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
