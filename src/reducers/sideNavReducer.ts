/**
 * ********** Импорт глобальных переменных **********
 */
import { SideNavActions, SideNavState, DATA_LOADING_REQUEST, DATA_LOADING_SUCCESS, DATA_LOADING_FAILURE } from '../constants/sideNavTypes/sideNavTypes';

const initialState: SideNavState = {
    isFetching: false,
    errorMessage: '',
    data: []
};

/**
 * ********** Редьюсер компонента SideNav **********
 */
export default function sideNavReducer(state = initialState, action: SideNavActions): SideNavState {
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
