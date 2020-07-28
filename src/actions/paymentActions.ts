/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';

/**
 * ********** Импорт глобальных переменных **********
 */
import {
    PaymentActions,
    PaymentState,
    PaymentHeaders,
    PaymentList,
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS_PAYMENTS_HEADERS,
    DATA_LOADING_SUCCESS_PAYMENTS_TABLE,
    DATA_LOADING_FAILURE,
    ResponseStatus,
    PaymentListReq
} from '../constants/types';

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../constants/Global';

/**
 * ********** Экшен для инициализации запроса **********
 */
export const fetchingDataRequest = (): PaymentActions => ({
    type: DATA_LOADING_REQUEST
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccessHeaders = (paymentListHeader: PaymentHeaders): PaymentActions => ({
    type: DATA_LOADING_SUCCESS_PAYMENTS_HEADERS,
    payload: paymentListHeader
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccessTable = (paymentListTable: PaymentList): PaymentActions => ({
    type: DATA_LOADING_SUCCESS_PAYMENTS_TABLE,
    payload: paymentListTable
});

/**
 * ********** Экшен для обработки ошибки при запросе на сервер **********
 */
export const fetchingDataFailure = (error: ResponseStatus): PaymentActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

/**
 * ********** Экшен для запроса данных из компонентов **********
 */
export const fetchDataPayment = (data: PaymentListReq) => async (dispatch: Dispatch<PaymentActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios.post(`${site}sortBetweenCashFlows`, data).then((response: AxiosResponse<PaymentListReq>) => {
            const filterData = response.data.payload.recordDisplayRules.filter((element: PaymentHeaders) => {
                if (element.visible) {
                    return element;
                }
            });
            dispatch(fetchingDataSuccessHeaders(filterData));
            dispatch(fetchingDataSuccessTable(response.data.payload.recordSet));
        });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};

/**
 * ********** Экшен для запроса данных для последней страницы **********
 */
export const fetchDataLastPagePayment = (data: PaymentState) => async (dispatch: Dispatch<PaymentActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios.post(`${site}findLastCashFlows`, data).then((response) => {
            dispatch(fetchingDataSuccess(response));
        });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};
