/**
 * ********** Импорт глобальных переменных **********
 */
import {
    PriceListActions,
    PriceListState,
    DATA_LOADING_REQUEST,
    DATA_LOADING_FAILURE,
    DATA_LOADING_SUCCESS_PRICE_LIST_HEADERS,
    DATA_LOADING_SUCCESS_PRICE_LIST_TABLE
} from '../constants/types';

const initialState: PriceListState = {
    isFetching: false,
    errorMessage: '',
    headers: null,
    table: null
};

/**
 * ********** Редьюсер компонента PriceList **********
 */
export default function priceListReducer(state = initialState, action: PriceListActions): PriceListState {
    switch (action.type) {
        case DATA_LOADING_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case DATA_LOADING_SUCCESS_PRICE_LIST_HEADERS:
            return {
                ...state,
                isFetching: false,
                headers: action.payload
            };
        case DATA_LOADING_SUCCESS_PRICE_LIST_TABLE:
            return {
                ...state,
                isFetching: false,
                table: action.payload
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
