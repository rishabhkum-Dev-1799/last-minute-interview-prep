import { createSlice } from "@reduxjs/toolkit"


const initialState={
    count:0
}

const counterSlice=createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increment:(state)=>{state.count++},
        decrement:(state)=>{state.count--},
        reset:(state)=>{state.count=0}

    }
})

export const counterSliceReducer=counterSlice.reducer
export const counterSliceAction=counterSlice.actions