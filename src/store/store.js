import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from "../reducers/counter/counterSlice";
import {categoriesSlice} from "../reducers/categories/categoriesSlice";
import {cartSlice} from "../reducers/cart/cartSlice";


export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
        categories: categoriesSlice.reducer,
        cart: cartSlice.reducer
    },
})