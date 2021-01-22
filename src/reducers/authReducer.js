import {
    AUTH_SUCCESS,
    LOGIN_FAILURE,
    PASSWORD_FAILURE,
    LOGOUT,
} from '../actions/types';

const initialState = {
    isAuth: null,
    isLoginValid: null,
    isPasswordValid: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuth: true,
            };
        case LOGIN_FAILURE:
            return {
                isLoginValid: false,
            };
        case PASSWORD_FAILURE:
            return {
                isPasswordValid: false,
            };
        case LOGOUT:
            return { isAuth: false };
        default:
            return state;
    }
};

export default authReducer;
