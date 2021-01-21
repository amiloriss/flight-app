import {
    GET_CARRIER,
    GET_PRICE,
    SET_DATE,
    GET_FLIGHT_TIME,
    SET_ERROR,
    SET_FAV,
} from '../actions/types';

const initialState = {
    loading: true,
    carrier: '',
    flightTime: '',
    price: 0,
    isFavTicket: false,
    favAmount: 0,
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
                favAmount:
                    state.isFavTicket === true
                        ? state.favAmount++
                        : state.favAmount++,
            };
        case GET_FLIGHT_TIME:
            return {
                ...state,
                flightTime: action.payload,
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
