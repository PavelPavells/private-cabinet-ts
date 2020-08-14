/**
 * ********** Импорт глобальных переменных **********
 */
import { MainActions, MainState, DATA_LOADING_REQUEST, DATA_LOADING_SUCCESS, DATA_LOADING_FAILURE } from '../constants/mainTypes';

const initialState: MainState = {
    isFetching: false,
    errorMessage: '',
    main: null
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
