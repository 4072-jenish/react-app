import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';



const store = configureStore({
    reducer: {rootReducer , 
        devTools: true
    }});

export default store;