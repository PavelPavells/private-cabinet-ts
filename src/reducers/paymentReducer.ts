/**
 * ********** Импорт глобальных переменных **********
 */
import {
    PaymentActions,
    PaymentState,
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS_PAYMENTS_HEADERS,
    DATA_LOADING_SUCCESS_PAYMENTS_TABLE,
    DATA_LOADING_FAILURE
} from '../constants/types';

const initialState: PaymentState = {
    isFetching: false,
    errorMessage: '',
    headersPayment: null,
    tablePayment: null
};

/**
 * ********** Редьюсер компонента Payment **********
 */
export default function paymentReducer(state = initialState, action: PaymentActions): PaymentState {
    switch (action.type) {
        case DATA_LOADING_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case DATA_LOADING_SUCCESS_PAYMENTS_HEADERS:
            return {
                ...state,
                isFetching: false,
                headersPayment: action.payload
            };
        case DATA_LOADING_SUCCESS_PAYMENTS_TABLE:
            return {
                ...state,
                isFetching: false,
                tablePayment: action.payload
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
