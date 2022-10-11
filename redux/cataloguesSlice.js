import { createSlice } from "@reduxjs/toolkit";
import { catalogues as cata } from "../data/data";

const initialState = {
    value: [...cata],
};

const catalogues = createSlice({
    name: "catalogues",
    initialState: initialState,
    reducers: {
        setCatalogues: (state, action) => {
            state.value = [...state.value, ...action.payload];
        },
    },
});

export const { setCatalogues } = catalogues.actions;
export default catalogues.reducer;
