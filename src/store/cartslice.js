import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeToCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        }
    }
})
export const { addToCart, removeToCart } = cartslice.actions;
export default cartslice.reducer;