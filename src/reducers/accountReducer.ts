/**
 * ********** Импорт глобальных переменных **********
 */
import { AccountActions, AccountState, DATA_LOADING_REQUEST, DATA_LOADING_SUCCESS, DATA_LOADING_FAILURE } from '../constants/accountTypes';

const initialState: AccountState = {
    isFetching: false,
    errorMessage: '',
    data: []
};

/**
 * ********** Редьюсер компонента Account **********
 */
export default function accountReducer(state = initialState, action: AccountActions): AccountState {
    switch (action.type) {
        case DATA_LOADING_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case DATA_LOADING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case DATA_LOADING_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}
