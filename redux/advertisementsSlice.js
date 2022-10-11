import { createSlice } from "@reduxjs/toolkit";
import { advertisements as ads } from "../data/data";

const initialState = {
    value: [...ads],
};

const advertisements = createSlice({
    name: "advertisements",
    initialState: initialState,
    reducers: {
        setAdvertisements: (state, action) => {
            state.value = [...state.value, ...action.payload];
        },
    },
});

export const { setAdvertisements } = advertisements.actions;
export default advertisements.reducer;
