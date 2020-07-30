/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';

/**
 * ********** Импорт глобальных переменных **********
 */
import {
    PriceListActions,
    DATA_LOADING_REQUEST,
    DATA_LOADING_FAILURE,
    DATA_LOADING_SUCCESS_PRICE_LIST_HEADERS,
    DATA_LOADING_SUCCESS_PRICE_LIST_TABLE,
    ResponseStatus,
    PriceListRes,
    PriceListReq,
    PriceListHeaders,
    PriceList,
    PriceListHeader,
    PriceListInputs,
    PRICE_LIST_SET_INPUTS,
    PRICE_LIST_SET_INPUT
} from '../constants/pricelListTypes';

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../constants/Global';

/**
 * ********** Экшен для инициализации запроса **********
 */
export const fetchingDataRequest = (): PriceListActions => ({
    type: DATA_LOADING_REQUEST
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccessHeaders = (priceListHeader: PriceListHeaders): PriceListActions => ({
    type: DATA_LOADING_SUCCESS_PRICE_LIST_HEADERS,
    payload: priceListHeader
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccessTable = (priceList: PriceList): PriceListActions => ({
    type: DATA_LOADING_SUCCESS_PRICE_LIST_TABLE,
    payload: priceList
});

/**
 * ********** Экшен для обработки ошибки при запросе на сервер **********
 */
export const fetchingDataFailure = (error: ResponseStatus): PriceListActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

/**
 * ********** Экшен для обработки инпутов **********
 */
export const priceListSetInputs = (inputs: PriceListInputs): PriceListActions => ({
    type: PRICE_LIST_SET_INPUTS,
    payload: inputs
});

/**
 * ********** Экшен для обработки инпутов **********
 */
export const priceListSetInput = (payload: { key: string; value: string }): PriceListActions => ({
    type: PRICE_LIST_SET_INPUT,
    payload
});

/**
 * ********** Экшен для запроса данных из компонентов **********
 */
export const fetchDataPriceList = (data: PriceListReq) => async (dispatch: Dispatch<PriceListActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}findPrice`, data)
            .then((response: AxiosResponse<PriceListRes>) => {
                const filterData = response.data.payload.recordDisplayRules.filter((element: PriceListHeader) => {
                    if (element.visible) {
                        return element;
                    }
                });
                const tempInputs = {};
                response.data.payload.recordDisplayRules.forEach((element) => {
                    // @ts-ignore
                    tempInputs[element.field_name] = '';
                });
                dispatch(priceListSetInputs(tempInputs));
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
