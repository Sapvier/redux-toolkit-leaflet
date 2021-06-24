import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories', () => {
        return fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(r => r.json())
    }
)

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        status: 'idle'
    },
    reducers: {
        saveCategories: (state, action) => {
            return {
                categories: action.payload
            }
        }
    },
    extraReducers: {
        [fetchCategories.pending]: state => {
            state.status = "loading"
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.categories = action.payload.categories.slice(0, 12)
            state.status = "success"
        },
    }
})

export const {saveCategories} = categoriesSlice.actions
