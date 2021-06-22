import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
    },
    reducers: {
        saveCategories: (state, action) => {
            return {
                categories: action.payload
            }
        }
    },
})

export const { saveCategories } = categoriesSlice.actions
