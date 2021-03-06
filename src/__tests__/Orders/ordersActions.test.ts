/**
 * импорт библиотек
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import site from '../../constants/Global';

/**
 * импорт экшенов
 */
import {
    fetchingDataRequest,
    fetchingDataSuccessHeaders,
    fetchingDataSuccessTable,
    fetchDataOrders,
    fetchingDataFailure
} from '../../actions/ordersActions';

/**
 * импорт переменных
 */
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_FAILURE,
    DATA_LOADING_SUCCESS_ORDERS_HEADERS,
    DATA_LOADING_SUCCESS_ORDERS_TABLE
} from '../../constants/ordersTypes';

/**
 * импорт типов
 */
// import { OrdersActions } from '../../constants/ordersTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
});

describe('TESTING action for async request for get data', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });
    it('TESTING fetchDataPayment(): async action when fetching payment has been done', () => {
        fetchMock.getOnce(`*`, {
            data: { displayRules: [1, 2, 3], content: [1, 2, 3] }
        });

        const expectedActions: any = [
            {
                type: DATA_LOADING_REQUEST
            }
            // {
            //     type: DATA_LOADING_SUCCESS_ORDERS_HEADERS,
            //     payload: [1, 2, 3] // в ожидании важно указать теже данные, что были указаны выше в моке запроса
            // }
            // {
            //     type: DATA_LOADING_SUCCESS_ORDERS_TABLE,
            //     payload: [1, 2, 3] // в ожидании важно указать теже данные, что были указаны выше в моке запроса
            // }
        ];

        /**
         * мок стора
         */
        const store = mockStore({});

        // @ts-ignore
        return store.dispatch(fetchDataOrders()).then(() => {
            /** add return statement */
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
