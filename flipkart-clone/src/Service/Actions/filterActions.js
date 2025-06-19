export const searchByName = (keyword) => ({
  type: "SEARCH_BY_NAME",
  payload: keyword,
});

export const filterByCategory = (category) => ({
  type: "FILTER_BY_CATEGORY",
  payload: category,
});

export const filterByPrice = (range) => ({
  type: "FILTER_BY_PRICE",
  payload: range,
});