import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from "../reducers/counter/counterSlice";
import {categoriesSlice} from "../reducers/categories/categoriesSlice";


export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
        categories: categoriesSlice.reducer
    },
})