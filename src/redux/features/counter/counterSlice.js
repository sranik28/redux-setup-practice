import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'count',
    initialState: {
        value: 0
    },
    reducers: {
        // eslint-disable-next-line no-unused-vars
        Increment: state => {
            state.value += 1
        },
        Decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
});
export const { Increment, Decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;