import {
    CatalogActions,
    CatalogState,
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE
} from '../../constants/catalogConstants/catalogConstants';

export const initialState: CatalogState = {
    isFetching: false,
    errorMessage: '',
    catalog: null
};

export default function paymentReducer(state = initialState, action: CatalogActions): CatalogState {
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
                catalog: action.payload
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
