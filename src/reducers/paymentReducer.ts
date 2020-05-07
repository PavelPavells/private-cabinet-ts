/** 
 * ********** Импорт глобальных переменных **********
 */
import {
    PaymentActions,
    PaymentState,
    DATA_LOADING_REQUEST, 
    DATA_LOADING_SUCCESS, 
    DATA_LOADING_FAILURE,
} from '../constants/types';

const initialState: PaymentState = {
    isFetching: false,
    errorMessage: '',
    data: []
}

/**
 * ********** Редьюсер компонента Payment **********
 */
export default function(state = initialState, action: PaymentActions): PaymentState {
    switch(action.type) {
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
        default: return state;
    }
}