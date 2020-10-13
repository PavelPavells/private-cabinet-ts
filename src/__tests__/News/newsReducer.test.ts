/**
 * import actions, reducers
 */
import Reducer, { initialState } from '../../reducers/authReducer';
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    DATA_LOADING_NEWS,
    DATA_LOADING_OFFERS,
    DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS
} from '../../constants/mainTypes';

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

    it('TESTING DATA_LOADING_SUCCESS', () => {
        const action = {
            type: DATA_LOADING_SUCCESS
        };
        // console.log(action);
    });

    it('TESTING DATA_LOADING_FAILURE', () => {
        const action = {
            type: DATA_LOADING_FAILURE
        };
        // console.log(action);
    });

    it('TESTING DATA_LOADING_NEWS', () => {
        const action = {
            type: DATA_LOADING_NEWS
        };
        // console.log(action);
    });

    it('TESTING DATA_LOADING_OFFERS', () => {
        const action = {
            type: DATA_LOADING_OFFERS
        };
        // console.log(action);
    });

    it('TESTING DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS', () => {
        const action = {
            type: DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS
        };
        // console.log(action);
    });
});
