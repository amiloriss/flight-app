import {
    AUTH_SUCCESS,
    PASSWORD_FAILURE,
    LOGIN_FAILURE,
    LOGOUT,
} from '../actions/types';

export const successAuth = (email) => (dispatch) => {
    dispatch({ type: AUTH_SUCCESS, payload: email });
};
export const failureLogin = () => ({ type: LOGIN_FAILURE });
export const failurePassword = () => ({ type: PASSWORD_FAILURE });
export const logout = () => ({ type: LOGOUT });
