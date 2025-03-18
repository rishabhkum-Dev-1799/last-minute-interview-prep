import { combineReducers } from "@reduxjs/toolkit";
import { counterSliceReducer } from "./slices/slice";

const rootReducer=combineReducers({
    counter:counterSliceReducer
})

export default rootReducer