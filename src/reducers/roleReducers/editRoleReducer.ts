/**
 * ********** Импорт глобальных переменных **********
 */
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    EditRoleState,
    EditRoleActions
} from '../../constants/roleTypes/editRole';

const initialState: EditRoleState = {
    isFetching: false,
    errorMessage: '',
    editRole: null
    // inputs: {}
};

/**
 * ********** Редьюсер компонента Edit Role **********
 */
export default function editRoleReducer(state = initialState, action: EditRoleActions): EditRoleState {
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
                editRole: action.payload
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
