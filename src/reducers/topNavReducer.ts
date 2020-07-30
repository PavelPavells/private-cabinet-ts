/**
 * ********** Импорт глобальных переменных **********
 */
import { TopNavActions, TopNavState, DATA_LOADING_REQUEST, DATA_LOADING_SUCCESS, DATA_LOADING_FAILURE } from '../constants/topNavTypes';

const initialState: TopNavState = {
    isFetching: false,
    errorMessage: '',
    data: []
};

/**
 * ********** Редьюсер компонента TopNav **********
 */
export default function topNavReducer(state = initialState, action: TopNavActions): TopNavState {
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
