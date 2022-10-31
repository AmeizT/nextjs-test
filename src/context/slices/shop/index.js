import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    error: {},
    cart: [],
    loading: false,
    reject: {},
}

export const fetchProducts = createAsyncThunk('shop/fetchProducts', () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'https://discava-rtk.vercel.app',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        },            
    }

    const pathname = process.env.NEXT_PUBLIC_ENV === 'production' ? 
    'https://discava-rtk.vercel.app/api/products' : 'http://localhost:3000/api/products'

    return axios
    .get(`${pathname}`, config)
    .then((response) => response.data)
})

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = state.products.find(product => product._id === action.payload)
            const userCart = state.cart.find((product) => product._id === action.payload ? true : false)

            state.cart = userCart ? state.cart.map((product) => product._id === action.payload ? {...product, qnty: product.qnty + 1} : product) : [...state.cart, {...product, qnty: 1}]
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.loading = true
            state.products = []
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.reject = false
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.reject = true
            state.products = []
            state.error = action.error.message
        })
    }
})

export const { addToCart } = shopSlice.actions

export default shopSlice.reducer