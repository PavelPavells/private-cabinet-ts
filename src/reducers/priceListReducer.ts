import {
    PriceListActions,
    PriceListState,
    DATA_LOADING_REQUEST,
    DATA_LOADING_FAILURE,
    DATA_LOADING_SUCCESS_PRICE_LIST_HEADERS,
    DATA_LOADING_SUCCESS_PRICE_LIST_TABLE,
    PRICE_LIST_SET_INPUTS,
    PRICE_LIST_SET_INPUT
} from '../constants/priceListTypes/pricelListTypes';

const initialState: PriceListState = {
    isFetching: false,
    errorMessage: '',
    inputs: {},
    headersPriceList: null,
    tablePriceList: null
};

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
                headersPriceList: action.payload
            };
        case DATA_LOADING_SUCCESS_PRICE_LIST_TABLE:
            return {
                ...state,
                isFetching: false,
                tablePriceList: action.payload
            };
        case DATA_LOADING_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case PRICE_LIST_SET_INPUTS:
            return {
                ...state,
                inputs: action.payload
            };
        case PRICE_LIST_SET_INPUT:
            return {
                ...state,
                inputs: { ...state.inputs, [action.payload.key]: action.payload.value }
            };
        default:
            return state;
    }
}
