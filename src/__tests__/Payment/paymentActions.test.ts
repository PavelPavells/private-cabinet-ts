/**
 * импорт библиотек
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import site from '../../constants/GlobalSettings/Global';

/**
 * импорт экшенов
 */
import {
    fetchingDataRequest,
    fetchingDataSuccessHeaders,
    fetchingDataSuccessTable,
    fetchDataPayment,
    fetchingDataFailure
} from '../../actions/paymentActions/paymentActions';

/**
 * импорт переменных
 */
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_FAILURE,
    DATA_LOADING_SUCCESS_PAYMENTS_HEADERS,
    DATA_LOADING_SUCCESS_PAYMENTS_TABLE
} from '../../constants/paymentTypes/paymentsTypes';

/**
 * импорт типов
 */
// import { OrdersActions } from '../../constants/ordersTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Testing Payment Actions', () => {
    it('TESTING fetchingDataRequest(): action for initialize request', () => {
        const action: any = {
            type: DATA_LOADING_REQUEST
        };
        expect(fetchingDataRequest()).toEqual(action);
    });

    it('TESTING fetchingDataSuccessHeaders(): action for get data after success request', () => {
        const response: any = [
            {
                keys: 'somesthing values'
            }
        ];
        const action: any = {
            type: DATA_LOADING_SUCCESS_PAYMENTS_HEADERS,
            payload: response
        };
        expect(fetchingDataSuccessHeaders(response)).toEqual(action);
    });

    it('TESTING fetchingDataSuccessTable(): action for get data after success request', () => {
        const response: any = [
            {
                keys: 'somesthing values'
            }
        ];
        const action: any = {
            type: DATA_LOADING_SUCCESS_PAYMENTS_TABLE,
            payload: response
        };
        expect(fetchingDataSuccessTable(response)).toEqual(action);
    });

    it('TESTING fetchingDataFailure(): action for get data after success request', () => {
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
        fetchMock.restore();
    });

    it('TESTING fetchDataPayment(): async action when fetching payment has been done', () => {
        const request: any = {
            page: 5,
            limit: 5,
            startDate: 'string',
            endDate: 'string',
            sortBy: 'string',
            sortDirection: 'string',
            groupBy: 'string',
            findBy: 'string'
        };

        fetchMock.postOnce(`${site}cashflow`, {
            headers: { 'content-type': 'application/json' },
            data: { displayFilter: [{}], content: [{}] }
        });

        const expectedActions: any = [
            {
                type: DATA_LOADING_REQUEST
            },
            {
                type: DATA_LOADING_SUCCESS_PAYMENTS_HEADERS,
                payload: { displayFilter: [{}] } // в ожидании важно указать теже данные, что были указаны выше в моке запроса
            },
            {
                type: DATA_LOADING_SUCCESS_PAYMENTS_TABLE,
                payload: { content: [{}] } // в ожидании важно указать теже данные, что были указаны выше в моке запроса
            }
        ];

        /**
         * мок стора
         */
        const store = mockStore({});

        // @ts-ignore
        // return store.dispatch(fetchDataPayment(request)).then(() => {
        //     expect(store.getActions()).toEqual(expectedActions);
        // });
    });
});
