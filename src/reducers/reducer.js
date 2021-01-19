import {
    SET_LOADING,
    GET_CARRIER,
    GET_PRICE,
    GET_PLACES,
    SET_DATE,
} from '../actions/types';

const initialState = {
    loading: true,
    carrier: '',
    price: 0,
    date: null,
    places: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_CARRIER:
            return {
                ...state,
                carrier: action.payload,
            };
        case GET_PRICE:
            return {
                ...state,
                price: action.payload,
            };
        case SET_DATE:
            return {
                date: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
