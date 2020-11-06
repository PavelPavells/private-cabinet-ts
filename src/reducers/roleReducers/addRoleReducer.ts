import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    AddRoleState,
    AddRoleActions
} from '../../constants/roleTypes/addRole';

const initialState: AddRoleState = {
    isFetching: false,
    errorMessage: '',
    addRole: null
    // inputs: {}
};

export default function addRoleReducer(state = initialState, action: AddRoleActions): AddRoleState {
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
                addRole: action.payload
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
