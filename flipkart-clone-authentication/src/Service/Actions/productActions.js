import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";

export const fetchProductsAsync = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch({ type: "GET_PRODUCTS", payload: products });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const addProductAsync = (product) => async (dispatch) => {
  try {
    await addDoc(collection(db, "products"), product);
    dispatch(fetchProductsAsync());
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const deleteProductAsync = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "products", id));
    dispatch(fetchProductsAsync());
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

export const editProductAsync = (id, updatedProduct) => async (dispatch) => {
  try {
    await updateDoc(doc(db, "products", id), updatedProduct);
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

export const deleteProduct = (id) => ({
  type: "DELETE_PRODUCT",
  payload: id,
});
