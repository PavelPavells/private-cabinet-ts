/**
 * import actions, reducers
 */
import Reducer, { initialState } from '../../reducers/authReducer';
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    DATA_LOADING_SUCCESS_SHIPMENT_HEADERS,
    DATA_LOADING_SUCCESS_SHIPMENT_TABLE
} from '../../constants/shipmentTypes';

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

    it('TESTING DATA_LOADING_SUCCESS_SHIPMENT_HEADERS', () => {
        const action = {
            type: DATA_LOADING_SUCCESS_SHIPMENT_HEADERS
        };
        // console.log(action);
    });

    it('TESTING DATA_LOADING_SUCCESS_SHIPMENT_TABLE', () => {
        const action = {
            type: DATA_LOADING_SUCCESS_SHIPMENT_TABLE
        };
        // console.log(action);
    });
});