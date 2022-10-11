import { createSlice } from "@reduxjs/toolkit";
import { dataMenu as menu } from "../data/data";

const initialState = {
    value: [...menu],
};

const dataMenu = createSlice({
    name: "dataMenu",
    initialState: initialState,
    reducers: {
        setDataMenu: (state, action) => {
            state.value = [...state.value, ...action.payload];
        },
    },
});

export const { setDataMenu } = dataMenu.actions;
export default dataMenu.reducer;
