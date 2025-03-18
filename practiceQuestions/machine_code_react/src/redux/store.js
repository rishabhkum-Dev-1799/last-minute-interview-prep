import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";



// Store is the source truth for the application
const store = configureStore({
    reducer:rootReducer
})

export default store