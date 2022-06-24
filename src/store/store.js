/** @format */

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";
import pageReducer from "../reducers/pageReducer";
import productsReducer from "../reducers/productsReducer";

const store = configureStore({
	reducer: { cart: cartReducer, page: pageReducer,products:productsReducer },
});

export default store;
