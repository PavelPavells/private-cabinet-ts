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
    DATA_LOADING_REQUEST,
    NEW_PASSWORD_USER,
    CHANGE_USER_DATA_ERROR_REGISTER,
    CHANGE_ERROR_NAME,
    GET_ERROR_REGISTER,
    SET_USER_COMPANY_NAME
} from '../constants/authTypes';

const initialState: AuthState = {
    isFetching: false,
    isAuthenticated: false,
    user: {},
    errorResult: {
        code: 4,
        message: 'Ошибка 404',
        action: null
    },
    errorRegisterResult: {
        code: 1,
        message: '',
        action: null
    },
    invitePayload: {
        inviteCode: '',
        inCode: '',
        expired: 0,
        alreadyUsed: 0,
        regEmail: '',
        isValid: null
    },
    partnerName: '',
    accountFullName: '',
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
        case DATA_LOADING_REQUEST:
            return {
                ...state,
                isFetching: true
            };
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
        case CHANGE_USER_DATA_ERROR_REGISTER:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                invitePayload: action.payload
            };
        case CHANGE_ERROR_NAME:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                errorResult: action.payload
            };
        case GET_ERROR_REGISTER:
            return {
                ...state,
                isFetching: false,
                errorRegisterResult: action.payload
            };
        default:
            return state;
    }
}
