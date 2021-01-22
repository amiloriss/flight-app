import {
    AUTH_SUCCESS,
    PASSWORD_FAILURE,
    LOGIN_FAILURE,
    LOGOUT,
} from '../actions/types';

export const successAuth = () => ({ type: AUTH_SUCCESS });
export const failureLogin = () => ({ type: LOGIN_FAILURE });
export const failurePassword = () => ({ type: PASSWORD_FAILURE });
export const logout = () => ({ type: LOGOUT });
