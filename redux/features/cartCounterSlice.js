import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart_count: 0,
}

export const counterSlice = createSlice({
    name: 'cartCounter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.cart_count += 1
        },
        decrement: (state) => {
            state.cart_count -= 1
        },
        incrementByAmount: (state, action) => {
            state.cart_count += action.payload
        },
        initialCartCount: (state, action) => {
            state.cart_count = action.payload || 0
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, initialCartCount } =
    counterSlice.actions

export default counterSlice.reducer
