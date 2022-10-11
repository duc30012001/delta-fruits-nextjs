import { createSlice } from "@reduxjs/toolkit";
import { categories as cate } from "../data/data";

const initialState = {
    value: [...cate],
};

const categories = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {
        setCategories: (state, action) => {
            state.value = [...state.value, ...action.payload];
        },
    },
});

export const { setCategories } = categories.actions;
export default categories.reducer;
