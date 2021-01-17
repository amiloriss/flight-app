import {} from '../actions/types';
const initialState = {};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
			};
	}
};

export default reducer;
