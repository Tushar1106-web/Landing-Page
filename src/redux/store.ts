import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";
import SlugSlice from "./Slices/SlugSlice";

const store = configureStore({
    reducer:{
        user:UserSlice,
        slug:SlugSlice
    }
})

export default store;