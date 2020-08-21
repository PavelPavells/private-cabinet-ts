/**
 * ********** Импорт глобальных переменных **********
 */
import {
    AuthState,
    AuthActions,
    SET_CURRENT_USER,
    USER_LOADING,
    USER_ERROR_LOADING,
    RESET_CURRENT_USER,
    NEW_PASSWORD_USER,
    SET_USER_COMPANY_NAME
} from '../constants/authTypes';

const initialState: AuthState = {
    isAuthenticated: false,
    user: {},
    partnerName: '',
    loading: false,
    error: ''
};
const isEmpty = (payload: any) => {
    if (payload) {
        return true;
    }
    return false;
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
                isAuthenticated: isEmpty(action.payload),
                user: action.payload
            };
        case RESET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: false,
                user: action.payload
            };
        case NEW_PASSWORD_USER:
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
        case USER_ERROR_LOADING:
            return {
                ...state,
                isAuthenticated: false,
                error: action.payload
            };
        case SET_USER_COMPANY_NAME:
            return {
                ...state,
                isAuthenticated: false,
                partnerName: action.payload
            };
        default:
            return state;
    }
}
