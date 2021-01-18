import { GET_DATA } from '../actions/types';
const initialState = {
	price: 3000,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				price: state.price,
			};

		default:
			return state;
	}
};

export default reducer;
