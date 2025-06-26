import { db } from "../../firebase";
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

const cartCollection = collection(db, "cart");

export const fetchCartAsync = () => async (dispatch) => {
  const user = auth.currentUser;
  if (!user) return;

  const uid = user.uid;
  const snapshot = await getDocs(collection(db, `users/${uid}/cart`));

  const cartItems = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  dispatch({ type: "SET_CART", payload: cartItems });
};


export const addToCartAsync = (product) => async (dispatch, getState) => {
  const existing = getState().cart.find((item) => item.id === product.id);

  if (existing) {
    dispatch(increaseQuantityAsync(product.id));
  } else {
    const newItem = { ...product, quantity: 1 };
    await setDoc(doc(db, "cart", product.id), newItem);
    dispatch({ type: "ADD_TO_CART", payload: newItem });
  }
};

export const increaseQuantityAsync = (id) => async (dispatch, getState) => {
  const item = getState().cart.find((item) => item.id === id);
  const newQty = item.quantity + 1;

  await updateDoc(doc(db, "cart", id), { quantity: newQty });
  dispatch({ type: "INCREASE_QUANTITY", payload: id });
};

export const decreaseQuantityAsync = (id) => async (dispatch, getState) => {
  const item = getState().cart.find((item) => item.id === id);
  const newQty = item.quantity - 1;

  if (newQty > 0) {
    await updateDoc(doc(db, "cart", id), { quantity: newQty });
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  } else {
    await deleteDoc(doc(db, "cart", id));
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  }
};

export const removeFromCartAsync = (id) => async (dispatch) => {
  await deleteDoc(doc(db, "cart", id));
  dispatch({ type: "REMOVE_FROM_CART", payload: id });
};
