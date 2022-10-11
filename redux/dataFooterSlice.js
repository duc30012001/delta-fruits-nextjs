import { createSlice } from "@reduxjs/toolkit";
import { dataFooter as footer } from "../data/data";

const initialState = {
    value: [...footer],
};

const dataFooter = createSlice({
    name: "dataFooter",
    initialState: initialState,
    reducers: {
        setDataFooter: (state, action) => {
            state.value = [...state.value, ...action.payload];
        },
    },
});

export const { setDataFooter } = dataFooter.actions;
export default dataFooter.reducer;
