import { setResepie } from "../storage";

const defaultResepie = {
  resepies: [],
  resept: null,
  isLoading: false
}

  const resepieReducer = (state = defaultResepie, action) => {
    switch (action.type) {
      case "ADD_RECIPES":
        setResepie (action.payload);
          return {
          ...state,
          resepies: action.payload,
        }
      case "GET_RESEP_BY_ID":
        return {
          ...state,
          resepie: action.payload,
        };
        default:
        return state;
  }
  }

  export default resepieReducer;
