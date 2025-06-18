const initialState = {
  all: [],
  filtered: [],
  category: "",
  priceRange: "",
  searchKeyword: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        all: action.payload,
        filtered: action.payload,
      };

    case "FILTER_BY_CATEGORY":
      const filteredByCat = action.payload
        ? state.all.filter((item) => item.category === action.payload)
        : state.all;
      return {
        ...state,
        filtered: filteredByCat,
        category: action.payload,
      };

    case "FILTER_BY_PRICE":
      const [min, max] = action.payload;
      const filteredByPrice = state.all.filter(
        (item) => item.price >= min && item.price <= max
      );
      return {
        ...state,
        filtered: filteredByPrice,
        priceRange: action.payload,
      };

    case "SEARCH_BY_NAME":
      const keyword = action.payload.toLowerCase();
      const filteredBySearch = state.all.filter((item) =>
        item.name.toLowerCase().includes(keyword)
      );
      return {
        ...state,
        filtered: filteredBySearch,
        searchKeyword: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;