import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const found = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (!found) {
                state.cartItems[found].count += 1
            } else state.cartItems.push(action.payload)
        }
    },
})

export const {addToCart} = cartSlice.actions