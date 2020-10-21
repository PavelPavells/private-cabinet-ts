/**
 * import actions, reducers
 */
import Reducer, { initialState } from '../../reducers/paymentReducer';
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_FAILURE,
    DATA_LOADING_SUCCESS_PAYMENTS_HEADERS,
    DATA_LOADING_SUCCESS_PAYMENTS_TABLE
} from '../../constants/paymentTypes/paymentsTypes';

describe('Testing Auth Reducer', () => {
    it('TESTING THE INITIAL STATE', () => {
        const initial: any = {
            isFetching: false,
            errorMessage: '',
            headersPayment: null,
            tablePayment: null
        };
        // @ts-ignore
        expect(Reducer(initial, {})).toEqual(initialState);
    });

    it('TESING DATA_LOADING_REQUEST action', () => {
        const action: any = {
            type: DATA_LOADING_REQUEST
        };

        expect(Reducer(initialState, action)).toEqual({
            ...initialState,
            isFetching: true
        });
    });

    it('TESTING DATA_LOADING_SUCCESS_PAYMENT_HEADERS action after success request', () => {
        const initial: any = {
            isFetching: true,
            errorMessage: '',
            headersPayment: null,
            tablePayment: null
        };
        const action: any = {
            type: DATA_LOADING_SUCCESS_PAYMENTS_HEADERS,
            paymentHeaders: [{}]
        };
        expect(Reducer(initial, action)).toEqual({
            ...initial,
            isFetching: false,
            headersPayment: action.payload
        });
    });

    it('TESTING DATA_LOADING_SUCCESS_PAYMENT_TABLE action after success action', () => {
        const initial: any = {
            isFetching: true,
            errorMessage: '',
            headersPayment: null,
            tablePayment: null
        };
        const action: any = {
            type: DATA_LOADING_SUCCESS_PAYMENTS_TABLE,
            tablePayment: [{}]
        };
        expect(Reducer(initial, action)).toEqual({
            ...initial,
            isFetching: false,
            tablePayment: action.payload
        });
    });

    it('TESTING DATA_LOADING_FAILURE action without errorMessage', () => {
        const initialStateWithoutError: any = {
            isFetching: false,
            errorMessage: '',
            headersPayment: null,
            tablePayment: null
        };
        const action: any = {
            type: DATA_LOADING_FAILURE,
            errorMessage: ''
        };
        expect(Reducer(initialState, action)).toEqual({
            ...initialStateWithoutError,
            isFetching: false,
            errorMessage: action.payload
        });
    });

    it('TESTING DATA_LOADING_FAILURE action after get errorMessage', () => {
        const initialStateWithError: any = {
            isFetching: false,
            errorMessage: 'Unknown error',
            headersPayment: null,
            tablePayment: null
        };
        const action: any = {
            type: DATA_LOADING_FAILURE,
            errorMessage: 'Unknown error'
        };
        expect(Reducer(initialState, action)).toEqual({
            ...initialStateWithError,
            isFetching: false,
            errorMessage: action.payload
        });
    });
});
