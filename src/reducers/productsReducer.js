/** @format */

const initialState = { products: [] };

const productsReducer = (state = initialState, action) => {
	// console.log("State and Action : ", state, action);
	switch (action.type) {
		case "GET_PRODUCT":
			// const newProduct = [...new Set([...state.products, ...action.payload])];
			return {
				...state,
				products: [...state.products, ...action.payload],
			};
		default:
			return state;
	}
};
export default productsReducer;
