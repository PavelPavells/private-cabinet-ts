import { GET_ERRORS } from "../constants/types";
const initialState = {};
// @ts-ignore
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default: return state;
    }
}
