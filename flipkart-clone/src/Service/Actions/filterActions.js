export const setSearch = (search) => ({ type: 'SET_SEARCH', payload: search });
export const setCategory = (category) => ({ type: 'SET_CATEGORY', payload: category });
export const filterByPrice = (range) => ({
  type: "SET_PRICE_RANGE",
  payload: range,
});
