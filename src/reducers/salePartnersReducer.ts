/** 
 * ********** Импорт глобальных переменных **********
 */
import {
    SalePartnersActions,
    SalePartnersState,
    DATA_LOADING_REQUEST, 
    DATA_LOADING_SUCCESS, 
    DATA_LOADING_FAILURE,
} from '../constants/types';

const initialState: SalePartnersState = {
    isFetching: false,
    errorMessage: '',
    data: []
}

/**
 * ********** Редьюсер компонента SalePartners **********
 */
export default function(state = initialState, action: SalePartnersActions): SalePartnersState {
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