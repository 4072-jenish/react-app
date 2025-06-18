import axios from "axios";

export const fetchProductsAsync = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/products");
    dispatch({ type: "GET_PRODUCTS", payload: res.data });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const addProductAsync = (product) => async (dispatch) => {
  try {
    await axios.post("http://localhost:5000/products", product);
    dispatch(fetchProductsAsync());
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const deleteProductAsync = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/products/${id}`);
    dispatch(fetchProductsAsync());
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

export const editProductAsync = (id, updatedProduct) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:5000/products/${id}`, updatedProduct);
    dispatch(fetchProductsAsync());
  } catch (error) {
    console.error("Error editing product:", error);
  }
};

export const filterByCategory = (category) => ({
  type: "FILTER_BY_CATEGORY",
  payload: category,
});

export const filterByPrice = (priceRange) => ({
  type: "FILTER_BY_PRICE",
  payload: priceRange,
});

export const searchByName = (keyword) => ({
  type: "SEARCH_BY_NAME",
  payload: keyword,
});