import { configureStore } from '@reduxjs/toolkit';
import  reducerData from './slice';
import { composeWithDevTools } from 'redux-devtools-extension';

    
export default  configureStore({
    reducer: reducerData,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({})
})