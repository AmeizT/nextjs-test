import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    region: {},
    location: {},
    error: {},
}

export const fetchRegion = createAsyncThunk('shop/fetchRegion', () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'https://discava.vercel.app',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        },            
    }

    return axios
    .get(`https://ipinfo.io/?token=${process.env.NEXT_PUBLIC_IPINFO_ID}`, config)
    .then((response) => response.data)
})

const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        saveUserLocation: (state) => {
            state.location = sessionStorage.getItem('location')
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRegion.fulfilled, (state, action) => {
            state.region = action.payload
        })

        builder.addCase(fetchRegion.rejected, (state, action) => {
            state.region = {},
            state.error = action.error.message
        })
    }
})

export const { saveUserLocation } = regionSlice.actions

export default regionSlice.reducer