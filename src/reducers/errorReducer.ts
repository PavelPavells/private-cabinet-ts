import { GET_ERRORS } from '../constants/authTypes';

const initialState = {};
// @ts-ignore
export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}
