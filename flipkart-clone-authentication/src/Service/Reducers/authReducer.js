const storedUser = JSON.parse(sessionStorage.getItem("user"));

const initialState = {
  user: storedUser || null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER_SUCCESS":
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload, error: null };

    case "LOGOUT":
      sessionStorage.removeItem("user");
      return { ...state, user: null, error: null };

    case "AUTH_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default authReducer;
