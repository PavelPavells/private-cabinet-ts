import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    RoleState,
    RoleActions
} from '../../constants/roleTypes/roleTypes';

const initialState: RoleState = {
    isFetching: false,
    errorMessage: '',
    role: null
    // inputs: {}
};

export default function roleReducer(state = initialState, action: RoleActions): RoleState {
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
                role: action.payload
            };
        case DATA_LOADING_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        // case PRICE_LIST_SET_INPUTS:
        //     return {
        //         ...state,
        //         inputs: action.payload
        //     };
        // case PRICE_LIST_SET_INPUT:
        //     return {
        //         ...state,
        //         inputs: { ...state.inputs, [action.payload.key]: action.payload.value }
        //     };
        default:
            return state;
    }
}
