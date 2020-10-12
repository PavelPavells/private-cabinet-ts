/**
 * import actions, reducers
 */
import Reducer, { initialState } from '../../reducers/authReducer';
import {
    SET_CURRENT_USER,
    USER_LOADING,
    USER_ERROR_LOADING,
    RESET_CURRENT_USER,
    DATA_LOADING_REQUEST,
    NEW_PASSWORD_USER,
    CHANGE_USER_DATA_ERROR_REGISTER,
    CHANGE_ERROR_NAME,
    GET_ERROR_REGISTER,
    GET_DATA_BUSINESS,
    SET_USER_COMPANY_NAME
} from '../../constants/authTypes/authTypes';

describe('Testing Auth Reducer', () => {
    it('TESING DATA_LOADING_REQUEST', () => {
        const action = {
            type: DATA_LOADING_REQUEST
        };

        expect(Reducer(initialState, action)).toEqual({
            ...initialState,
            isFetching: true
        });
    });

    it('TESTING SET_CURRENT_USER', () => {
        const action = {
            type: SET_CURRENT_USER
        };
        console.log(action);
    });

    it('TESTING RESET_CURRENT_USER', () => {
        const action = {
            type: RESET_CURRENT_USER
        };
        console.log(action);
    });

    it('TESTING NEW_PASSWORD_USER', () => {
        const action = {
            type: NEW_PASSWORD_USER
        };
        console.log(action);
    });

    it('TESTING USER_LOADING', () => {
        const action = {
            type: USER_LOADING
        };
        console.log(action);
    });

    it('TESTING USER_ERROR_LOADING', () => {
        const action = {
            type: USER_ERROR_LOADING
        };
        console.log(action);
    });

    it('TESTING SET_USER_COMPANY_NAME', () => {
        const action = {
            type: SET_USER_COMPANY_NAME
        };
        console.log(action);
    });

    it('TESTING CHANGE_USER_DATA_ERROR_REGISTER', () => {
        const action = {
            type: CHANGE_USER_DATA_ERROR_REGISTER
        };
        console.log(action);
    });

    it('TESTING CHANGE_ERROR_NAME', () => {
        const action = {
            type: CHANGE_ERROR_NAME
        };
        console.log(action);
    });

    it('TESTING GET_ERROR_REGISTER', () => {
        const action = {
            type: GET_ERROR_REGISTER
        };
        console.log(action);
    });

    it('TESTING GET_DATA_BUSINESS', () => {
        const action = {
            type: GET_DATA_BUSINESS
        };
        console.log(action);
    });
});
