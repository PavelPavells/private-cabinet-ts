/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';

/**
 * ********** Импорт глобальных переменных **********
 */
import {
    OrdersActions,
    DATA_LOADING_REQUEST,
    DATA_LOADING_FAILURE,
    DATA_LOADING_SUCCESS_ORDERS_HEADERS,
    DATA_LOADING_SUCCESS_ORDERS_TABLE,
    OrdersHeaders,
    OrdersList,
    OrdersListRes,
    OrdersHeader,
    OrdersListReq
    // ResponseStatus,
    // PriceListRes,
    // PriceListReq,
    // PriceListHeaders,
    // PriceList,
    // PriceListHeader
} from '../constants/ordersTypes';

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../constants/Global';
import { ResponseStatus } from '../constants/paymentsTypes';

/**
 * ********** Экшен для инициализации запроса **********
 */
export const fetchingDataRequest = (): OrdersActions => ({
    type: DATA_LOADING_REQUEST
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccessHeaders = (ordersHeader: OrdersHeaders): OrdersActions => ({
    type: DATA_LOADING_SUCCESS_ORDERS_HEADERS,
    payload: ordersHeader
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccessTable = (orders: OrdersList): OrdersActions => ({
    type: DATA_LOADING_SUCCESS_ORDERS_TABLE,
    payload: orders
});

/**
 * ********** Экшен для обработки ошибки при запросе на сервер **********
 */
export const fetchingDataFailure = (error: ResponseStatus): OrdersActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

/**
 * ********** Экшен для запроса данных из компонентов **********
 */
export const fetchDataOrders = (data: OrdersListReq) => async (dispatch: Dispatch<OrdersActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}orders`, data)
            .then((response: AxiosResponse<OrdersListRes>) => {
                const filterData = response.data.payload.recordDisplayRules.filter((element: OrdersHeader) => {
                    if (element.visible) {
                        return element;
                    }
                });
                dispatch(fetchingDataSuccessHeaders(filterData));
                dispatch(fetchingDataSuccessTable(response.data.payload.recordSet));
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};
