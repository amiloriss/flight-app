import {
    GET_CARRIER,
    GET_PRICE,
    SET_DATE,
    SET_ERROR,
    SET_FAV,
} from '../actions/types';

const initialState = {
    loading: true,
    carrier: '',
    price: 0,
    isFavTicket: false,
    date: null,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
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
        case SET_FAV:
            return {
                ...state,
                isFavTicket: !state.isFavTicket,
            };
        case SET_DATE:
            return {
                date: action.payload,
            };
        case SET_ERROR:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};

export default reducer;
