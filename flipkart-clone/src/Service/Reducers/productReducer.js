const initialState = {
  all: [],
  filtered: [],
  category: "",
  priceRange: "",
  searchKeyword: "",
};

const productReducer = (state = initialState, action) => {
  const applyFilters = (products, filters) => {
    const keyword = (filters.name || "").toLowerCase();
    const category = filters.category || "";
    const priceRange = filters.priceRange || [];
  
    return products.filter((p) => {
      const matchKeyword =
        p.name.toLowerCase().includes(keyword) ||
        p.category.toLowerCase().includes(keyword);
  
      const matchCategory = !category || p.category === category;
  
      const matchPrice =
        priceRange.length === 0 ||
        (p.price >= priceRange[0] && p.price <= priceRange[1]);
  
      return matchKeyword && matchCategory && matchPrice;
    });
  };
  
  



  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        all: action.payload,
        filtered: action.payload,
      };

   case "FILTER_BY_CATEGORY":
      return { ...state, category: action.payload };

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
     case "SEARCH_BY_NAME": {
       const filters = { ...state.filters, name: action.payload };
       return {
         ...state,
         filters,
         filtered: applyFilters(state.all, filters),
       };
     }

      case "DELETE_PRODUCT": {
        const updated = state.all.filter((p) => p.id !== action.payload);
        return {
          ...state,
          all: updated,
          filtered: applyFilters(updated, state.filters),
        };
      }

    default:
      return state;
  }
};

export default productReducer;