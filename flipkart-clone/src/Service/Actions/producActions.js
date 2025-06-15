import axios from 'axios';

export const addProduct = (product) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:5000/products', product);
    dispatch({ type: 'ADD_PRODUCT', payload: res.data });
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:5000/products');
    dispatch({ type: 'SET_PRODUCTS', payload: res.data });
  };
};
