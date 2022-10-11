import { createSlice } from "@reduxjs/toolkit";
import { news as newss } from "../data/data";

const initialState = {
    value: { ...newss },
};

const news = createSlice({
    name: "news",
    initialState: initialState,
    reducers: {
        setNews: (state, action) => {
            state.value = [...state.value, ...action.payload];
        },
    },
});

export const { setNews } = news.actions;
export default news.reducer;
