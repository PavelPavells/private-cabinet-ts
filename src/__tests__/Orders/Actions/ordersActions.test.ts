/**
 * импорт библиотек
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
import moxios from 'moxios';
// import expect from 'expect';
// import site from '../../../constants/Global';

/**
 * импорт экшенов
 */
import {
    fetchingDataRequest,
    fetchingDataSuccessHeaders,
    fetchingDataSuccessTable,
    fetchDataOrders,
    fetchingDataFailure
} from '../../../actions/ordersActions/ordersActions';

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
/**
 * config mock store
 */
export const initialState = {};

export const mockStore = configureMockStore([thunk]);

export const makeMockStore = (state = {}) => {
    return mockStore({
        ...initialState,
        ...state
    });
};

const mockSuccess = (data: any) => ({ status: 200, response: data.payload });
const mockError = (error: any) => ({ status: 500, response: error });

describe('Testing Orders Actions', () => {
    it('TESTING DATA_LOADING_REQUEST action for initialize request', () => {
        const action: any = {
            type: DATA_LOADING_REQUEST
        };
        expect(fetchingDataRequest()).toEqual(action);
    });

    it('TESTING DATA_LOADING_HEADERS action for success request', () => {
        const response: any = [
            {
                keys: 'somesthing values'
            }
        ];
        const action: any = {
            type: DATA_LOADING_SUCCESS_ORDERS_HEADERS,
            payload: response
        };
        expect(fetchingDataSuccessHeaders(response)).toEqual(action);
    });

    it('TESTING DATA_LOADING_TABLE action for success request', () => {
        const response: any = [
            {
                keys: 'something values'
            }
        ];
        const action: any = {
            type: DATA_LOADING_SUCCESS_ORDERS_TABLE,
            payload: response
        };
        expect(fetchingDataSuccessTable(response)).toEqual(action);
    });

    it('TESTING DATA_LOADING_FAILURE action without failure request', () => {
        const response: any = '';
        const action: any = {
            type: DATA_LOADING_FAILURE,
            payload: response
        };
        expect(fetchingDataFailure(response)).toEqual(action);
    });

    it('TESTING DATA_LOADING_FAILURE action for failure request', () => {
        const response: any = 'Unknown Error';
        const action: any = {
            type: DATA_LOADING_FAILURE,
            payload: response
        };
        expect(fetchingDataFailure(response)).toEqual(action);
    });

    describe('TESTING action for async request for get data', () => {
        beforeEach(() => moxios.install());
        afterEach(() => moxios.uninstall());

        it('TESTING fetchDataOrders(): async action when fetching payment has been done', () => {
            const response = ['some', 'objects'];
            const store = makeMockStore();

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith(mockSuccess(response));
            });

            const expected = [
                { type: DATA_LOADING_REQUEST },
                { type: DATA_LOADING_SUCCESS_ORDERS_HEADERS, payload: response },
                { type: DATA_LOADING_SUCCESS_ORDERS_TABLE, payload: response }
            ];

            // @ts-ignore
            store.dispatch(fetchDataOrders()).then(() => {
                expect(store.getActions()).toEqual(expected);
            });
        });

        it('TESTING fetchDataOrders(): async action when fetching todos has been failed', () => {
            const response = 'Unknown Error';
            const store = makeMockStore();

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith(mockError(response));
            });

            const expected = [{ type: DATA_LOADING_REQUEST }, { type: DATA_LOADING_FAILURE, payload: response }];

            // @ts-ignore
            store.dispatch(fetchDataOrders()).then(() => {
                expect(store.getActions()).toEqual(expected);
            });
        });
    });
});
