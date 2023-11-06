import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './productslice';
import cartReducer from './cartslice';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    // ...other reducers if present
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    // ...other configurations if needed
});

const persistor = persistStore(store);

export { store, persistor };
