/**
 * ********** Импорт глобальных переменных **********
 */
import {
    OrdersActions,
    OrdersState,
    DATA_LOADING_REQUEST,
    DATA_LOADING_FAILURE,
    DATA_LOADING_SUCCESS_ORDERS_HEADERS,
    DATA_LOADING_SUCCESS_ORDERS_TABLE
} from '../constants/types';

const initialState: OrdersState = {
    isFetching: false,
    errorMessage: '',
    ordersHeaders: null,
    ordersTable: null
};

/**
 * ********** Редьюсер компонента PriceList **********
 */
export default function ordersReducer(state = initialState, action: OrdersActions): OrdersState {
    switch (action.type) {
        case DATA_LOADING_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case DATA_LOADING_SUCCESS_ORDERS_HEADERS:
            return {
                ...state,
                isFetching: false,
                ordersHeaders: action.payload
            };
        case DATA_LOADING_SUCCESS_ORDERS_TABLE:
            return {
                ...state,
                isFetching: false,
                ordersTable: action.payload
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
