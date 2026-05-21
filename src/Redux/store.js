import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterslice.js"

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store;