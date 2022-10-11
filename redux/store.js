import { configureStore } from "@reduxjs/toolkit";

import advertisementsReducer from "./advertisementsSlice";
import cartItemsReducer from "./cartItemsSlice";
import cataloguesReducer from "./cataloguesSlice";
import categoriesReducer from "./categoriesSlice";
import dataFooterReducer from "./dataFooterSlice";
import dataMenuReducer from "./dateMenuSlice";
import informationReducer from "./informationSlice";
import newsReducer from "./newsSlice";
import productsReducer from "./productsSlice";
import quickViewReducer from "./quickViewSlice";

const rootReducer = {
    advertisements: advertisementsReducer,
    cartItems: cartItemsReducer,
    catalogues: cataloguesReducer,
    categories: categoriesReducer,
    dataFooter: dataFooterReducer,
    dataMenu: dataMenuReducer,
    information: informationReducer,
    news: newsReducer,
    products: productsReducer,
    quickView: quickViewReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
