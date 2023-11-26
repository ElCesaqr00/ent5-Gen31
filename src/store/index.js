import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerNameSlice"

const store = configureStore({
    reducer:{
        trainerName
    }
})

export default store