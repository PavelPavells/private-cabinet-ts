import {
    CatalogActions,
    CatalogState,
    DATA_LOADING_REQUEST_CATALOG,
    DATA_LOADING_SUCCESS_CATALOG,
    DATA_LOADING_FAILURE_CATALOG
} from '../../constants/catalogConstants/catalogConstants';

export const initialState: CatalogState = {
    isFetching: false,
    errorMessage: '',
    catalog: null
};

export default function paymentReducer(state = initialState, action: CatalogActions): CatalogState {
    switch (action.type) {
        case DATA_LOADING_REQUEST_CATALOG:
            return {
                ...state,
                isFetching: true
            };
        case DATA_LOADING_SUCCESS_CATALOG:
            return {
                ...state,
                isFetching: false,
                catalog: action.payload
            };
        case DATA_LOADING_FAILURE_CATALOG:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}
