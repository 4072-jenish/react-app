import "../dataManag"

const defaultAnime  = {
    animes : [],
    anime : null,
    isLoading : false,
}

const animeReducer = (state = defaultAnime, action) => {
    switch (action.type) {

        case "ADD_NEW_ANIME":
         let newAnime = [...state.animes, action.payload];
         saveData(newAnime);
         return {
             ...state,
             animes : [...state.animes, action.payload]
         }
                  default : 
                  return state;
            }
}

export default animeReducer;