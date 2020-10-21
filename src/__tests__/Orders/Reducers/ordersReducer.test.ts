/**
 * импорт редьюсеров
 */
import Reducer, { initialState } from '../../../reducers/ordersReducer';

/**
 * импорт переменных
 */
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_FAILURE,
    DATA_LOADING_SUCCESS_ORDERS_HEADERS,
    DATA_LOADING_SUCCESS_ORDERS_TABLE
} from '../../../constants/ordersTypes/ordersTypes';

/**
 * импорт типов
 */
// import { OrdersActions } from '../../constants/ordersTypes';

describe('Testing Orders Reducer', () => {
    it('TESTING THE INITIAL STATE', () => {
        const initial: any = {
            isFetching: false,
            errorMessage: '',
            ordersHeaders: null,
            ordersTable: null
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

    it('TESTING DATA_LOADING_SUCCESS_ORDERS_HEADERS action after success request', () => {
        const initial: any = {
            isFetching: true,
            errorMessage: '',
            ordersHeaders: null,
            ordersTable: null
        };
        const action: any = {
            type: DATA_LOADING_SUCCESS_ORDERS_HEADERS,
            ordersHeaders: [{}]
        };
        expect(Reducer(initial, action)).toEqual({
            ...initial,
            isFetching: false,
            ordersHeaders: action.payload
        });
    });

    it('TESTING DATA_LOADING_SUCCESS_ORDERS_TABLE action after success request', () => {
        const initial: any = {
            isFetching: true,
            errorMessage: '',
            ordersHeaders: null,
            ordersTable: null
        };
        const action: any = {
            type: DATA_LOADING_SUCCESS_ORDERS_TABLE,
            ordersTable: [{}]
        };
        expect(Reducer(initial, action)).toEqual({
            ...initial,
            isFetching: false,
            ordersTable: action.payload
        });
    });

    it('TESTING DATA_LOADING_FAILURE action without errorMessage', () => {
        const initialStateWithoutError: any = {
            isFetching: false,
            errorMessage: '',
            ordersHeaders: null,
            ordersTable: null
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
            ordersHeaders: null,
            ordersTable: null
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
