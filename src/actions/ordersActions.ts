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
    DATA_LOADING_SUCCESS_ORDERS_TABLE
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

/**
 * ********** Экшен для инициализации запроса **********
 */
export const fetchingDataRequest = (): OrdersActions => ({
    type: DATA_LOADING_REQUEST
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccessHeaders = (ordersHeader: any): OrdersActions => ({
    type: DATA_LOADING_SUCCESS_ORDERS_HEADERS,
    payload: ordersHeader
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccessOrders = (orders: any): OrdersActions => ({
    type: DATA_LOADING_SUCCESS_ORDERS_TABLE,
    payload: orders
});

/**
 * ********** Экшен для обработки ошибки при запросе на сервер **********
 */
export const fetchingDataFailure = (error: any): OrdersActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

/**
 * ********** Экшен для запроса данных из компонентов **********
 */
export const fetchDataOrders = (data: any) => async (dispatch: Dispatch<OrdersActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}orders`, data)
            .then((response: AxiosResponse<any>) => {
                const filterData = response.data.payload.recordDisplayRules.filter((element: any) => {
                    if (element.visible) {
                        return element;
                    }
                });
                dispatch(fetchingDataSuccessHeaders(filterData));
                dispatch(fetchingDataSuccessOrders(response.data.payload.recordSet));
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};
