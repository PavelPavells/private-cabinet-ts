/**
 * ********** Импорт глобальных переменных **********
 */
import { WebAppActions, WebAppState, DATA_LOADING_REQUEST, DATA_LOADING_SUCCESS, DATA_LOADING_FAILURE } from '../constants/webAppTypes';

const initialState: WebAppState = {
    isFetching: false,
    errorMessage: '',
    data: []
};

/**
 * ********** Редьюсер компонента WebApp **********
 */
export default function webAppReducer(state = initialState, action: WebAppActions): WebAppState {
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
