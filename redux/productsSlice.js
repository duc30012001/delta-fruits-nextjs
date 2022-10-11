import { createSlice } from "@reduxjs/toolkit";
import { products as productsList } from "../data/data";

const initialState = {
    value: [...productsList, ...productsList, ...productsList, ...productsList],
};

const products = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            state.value = [...state.value, ...action.payload];
        },
    },
});

export const { setProducts } = products.actions;
export default products.reducer;
