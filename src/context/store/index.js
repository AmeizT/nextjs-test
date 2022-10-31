import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../slices/shop'
import regionReducer from '../slices/region'
import feedReducer from '../slices/feed'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['shop'],
}

const rootReducer = combineReducers({
    shop: shopReducer,
    map: regionReducer,
    feed: feedReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const ctxStore = () => {
    const store = configureStore ({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    })
    
    const persistor = persistStore(store)
    return { persistor, store }
}

export default ctxStore