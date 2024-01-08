import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        increment: (state, action) => {
            state.count++
        },
        decrement: (state, action) => {
            state.count--
        }
    }
})


export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;