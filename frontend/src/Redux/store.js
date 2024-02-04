import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./Reducers/PostSlice";




export const store = configureStore({
    reducer:{
        postReducer
    }
})