import { createSlice } from "@reduxjs/toolkit";
import { information as info } from "../data/data";

const initialState = {
    value: { ...info },
};

const information = createSlice({
    name: "information",
    initialState: initialState,
    reducers: {
        setInformation: (state, action) => {
            state.value = [...state.value, ...action.payload];
        },
    },
});

export const { setInformation } = information.actions;
export default information.reducer;
