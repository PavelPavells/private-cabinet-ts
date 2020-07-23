/**
 * ********** Импорт глобальных переменных **********
 */
// const isEmpty = require("is-empty");

import { AuthState, AuthActions, SET_CURRENT_USER, USER_LOADING, RESET_CURRENT_USER, NEW_PASSWORD } from '../constants/types';

const initialState: AuthState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

/**
 * ********** Редьюсер компонента SecuredRoute(Login/Register) **********
 */
// eslint-disable-next-line func-names
export default function (state = initialState, action: AuthActions): AuthState {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: action.payload,
                user: action.payload
            };
        case RESET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: false,
                user: action.payload
            };
        case NEW_PASSWORD:
            return {
                ...state,
                isAuthenticated: false,
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
