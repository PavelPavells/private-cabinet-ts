/**
 * ********** Импорт глобальных переменных **********
 */
import {
    MainActions,
    MainState,
    DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS,
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    DATA_LOADING_NEWS,
    DATA_LOADING_OFFERS
} from '../constants/mainTypes';

const initialState: MainState = {
    isFetching: false,
    errorMessage: '',
    main: null,
    table: null,
    news: null,
    offers: null
};

/**
 * ********** Редьюсер компонента Main **********
 */
export default function mainReducer(state = initialState, action: MainActions): MainState {
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
                main: action.payload
            };
        case DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS:
            return {
                ...state,
                isFetching: false,
                table: action.payload
            };
        case DATA_LOADING_NEWS:
            return {
                ...state,
                isFetching: false,
                news: action.payload
            };
        case DATA_LOADING_OFFERS:
            return {
                ...state,
                isFetching: false,
                offers: action.payload
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
