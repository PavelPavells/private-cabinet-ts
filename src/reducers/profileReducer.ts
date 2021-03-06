import { ProfileActions, ProfileState, DATA_LOADING_REQUEST, DATA_LOADING_SUCCESS, DATA_LOADING_FAILURE } from '../constants/profileTypes/profileTypes';

const initialState: ProfileState = {
    isFetching: false,
    errorMessage: '',
    // @ts-ignore
    profile: []
};

export default function profileReducer(state = initialState, action: ProfileActions): ProfileState {
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
                profile: action.payload
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
