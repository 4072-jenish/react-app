import '../storage.js'
import { setAnime } from '../storage.js';

const defaultAnime = {
    animes : [],
    anime : null,
    isloading: false,
}

const animeReducer = (state = defaultAnime, action) => {
    switch (action.type) {
        case 'ADD_ANIMES':
            setAnime(action.payload);

            return {
                ...state,
                animes: action.payload ,
            }
        default:
            return state
    }
}

export default animeReducer;