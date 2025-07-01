import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup,
  } from "firebase/auth";
  import { auth, googleProvider, facebookProvider } from "../../firebase";
  
  export const loginAsync = (user) => ({
    type: "LOGIN",
    payload: user,
  });
  export const registerAsync = (email, password) => async (dispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch({ type: "REGISTER_SUCCESS", payload: userCredential.user });
    } catch (error) {
      dispatch({ type: "AUTH_ERROR", payload: error.message });
    }
  };
  
  export const loginWithGoogle = () => async (dispatch) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch({ type: "LOGIN", payload: result.user });
    } catch (error) {
      dispatch({ type: "AUTH_ERROR", payload: error.message });
    }
  };
  
  export const loginWithFacebook = () => async (dispatch) => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      dispatch({ type: "LOGIN", payload: result.user });
    } catch (error) {
      dispatch({ type: "AUTH_ERROR", payload: error.message });
    }
  };
  
  export const logoutAsync = () => (dispatch) => {
    try {
      sessionStorage.removeItem("user"); 
      dispatch({ type: "LOGOUT_SUCCESS" });
    } catch (error) {
      dispatch({ type: "AUTH_ERROR", payload: error.message });
    }
  };
  