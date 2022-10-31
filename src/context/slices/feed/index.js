import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    stories: [],
    error: {},
}

export const fetchStories = createAsyncThunk('shop/fetchStories', () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'https://discava-rtk.vercel.app',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        },            
    }

    const pathname = process.env.NEXT_PUBLIC_ENV === 'production' ? 
    'https://discava-rtk.vercel.app/api/blog' : 'http://localhost:3000/api/blog'

    return axios
    .get(`${pathname}`, config)
    .then((response) => response.data)
})

const storySlice = createSlice({
    name: 'stories',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchStories.fulfilled, (state, action) => {
            state.stories = action.payload
        })

        builder.addCase(fetchStories.rejected, (state, action) => {
            state.stories = [],
            state.error = action.error.message
        })
    }
})

export default storySlice.reducer