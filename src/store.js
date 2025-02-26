import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./redux/CounterSlice"
import blogReducer from "./redux/BlogSlice"


export const store = configureStore({
    reducer:{
        count:countReducer,
        blog:blogReducer
    }
})