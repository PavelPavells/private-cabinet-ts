/**
 * import actions, reducers
 */
import Reducer, { initialState } from '../../reducers/shipmentReducer';
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_FAILURE,
    DATA_LOADING_SUCCESS_SHIPMENT_HEADERS,
    DATA_LOADING_SUCCESS_SHIPMENT_TABLE
} from '../../constants/shipmentTypes/shipmentTypes';

describe('Testing Auth Reducer', () => {
    it('TESTING THE INITIAL STATE', () => {
        const initial: any = {
            isFetching: false,
            errorMessage: '',
            inputs: {},
            headersShipment: null,
            tableShipment: null
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

    it('TESTING DATA_LOADING_SUCCESS_SHIPMENT_HEADERS action after success request', () => {
        const initial: any = {
            isFetching: true,
            errorMessage: '',
            inputs: {},
            headersShipment: null,
            tableShipment: null
        };

        const action: any = {
            type: DATA_LOADING_SUCCESS_SHIPMENT_HEADERS,
            headersShipment: [{}]
        };

        expect(Reducer(initial, action)).toEqual({
            ...initial,
            isFetching: false,
            headersShipment: action.payload
        });
    });

    it('TESTING DATA_LOADING_SUCCESS_SHIPMENT_TABLE action after success request', () => {
        const initial: any = {
            isFetching: true,
            errorMessage: '',
            inputs: {},
            headersShipment: null,
            tableShipment: null
        };

        const action: any = {
            type: DATA_LOADING_SUCCESS_SHIPMENT_TABLE,
            tableShipment: [{}]
        };

        expect(Reducer(initial, action)).toEqual({
            ...initial,
            isFetching: false,
            tableShipment: action.payload
        });
    });

    it('TESTING DATA_LOADING_FAILURE action without errorMessage', () => {
        const initialStateWithoutError: any = {
            isFetching: false,
            errorMessage: '',
            inputs: {},
            headersShipment: null,
            tableShipment: null
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
            inputs: {},
            headersShipment: null,
            tableShipment: null
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
