/** 
 * ********** Импорт глобальных переменных **********
 */
import {
    MainActions,
    MainState,
    DATA_LOADING_REQUEST, 
    DATA_LOADING_SUCCESS, 
    DATA_LOADING_FAILURE,
} from '../constants/types';

const initialState: MainState = {
    isFetching: false,
    errorMessage: '',
    data: []
}

/**
 * ********** Редьюсер компонента Main **********
 */
export default function(state = initialState, action: MainActions): MainState {
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