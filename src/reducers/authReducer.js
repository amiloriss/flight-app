import {
    AUTH_SUCCESS,
    LOGIN_FAILURE,
    PASSWORD_FAILURE,
    LOGOUT,
} from '../actions/types';

const initialState = {
    isLoginValid: null,
    isPasswordValid: null,
    user: localStorage.getItem('user'),
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            localStorage.setItem('user', action.payload);
            return {
                ...state,
                user: action.payload,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoginValid: false,
            };
        case PASSWORD_FAILURE:
            return {
                ...state,
                isPasswordValid: false,
            };
        case LOGOUT:
            localStorage.removeItem('user');
            return { ...state, isLoginValid: null, isPasswordValid: null };
        default:
            return state;
    }
};

export default authReducer;
