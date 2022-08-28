import { configureStore } from '@reduxjs/toolkit'
import cartCounterSlice from './features/cartCounterSlice'

export const store = configureStore({
    reducer: {
        cartCounter: cartCounterSlice
    }
})