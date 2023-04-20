import { configureStore } from "@reduxjs/toolkit";
import dataSlice from '../mainAsset'



export const store = configureStore({
    reducer:{
        data:dataSlice
    }
})