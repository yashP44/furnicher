import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        electronicsData: [],
        loading: false,
    },
    reducers: {
        setProducts: (state, action) => {
            state.electronicsData = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setFetchedData(state, action) {
            state.electronicsData = action.payload;
        },
        // Other potential reducers for different states
    },
})

export const { setProducts, setLoading } = productSlice.actions;
export const setFetchedData = (data) => ({
    type: 'SET_FETCHED_DATA',
    payload: data,
});
export default productSlice.reducer;