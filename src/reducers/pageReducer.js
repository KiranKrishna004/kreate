/** @format */

const initialState = { page: 1 };

const pageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "NEXT_PAGE":
			return { page: state.page + 1 };
		default:
			return state;
	}
};

export default pageReducer;
