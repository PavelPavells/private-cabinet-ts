/** ********** IMPORT LIBRARIES AND VARIABLES ********** */
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';

/**
 * ********** Импорт глобальных переменных **********
 */
import {
    ShipmentActions,
    DATA_LOADING_REQUEST,
    DATA_LOADING_FAILURE,
    DATA_LOADING_SUCCESS_SHIPMENT_HEADERS,
    DATA_LOADING_SUCCESS_SHIPMENT_TABLE,
    ResponseStatus,
    ShipmentListRes,
    ShipmentListReq,
    ShipmentList,
    ShipmentHeader,
    ShipmentHeaders
} from '../constants/shipmentTypes';

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../constants/Global';

/**
 * ********** Экшен для инициализации запроса **********
 */
export const fetchingDataRequest = (): ShipmentActions => ({
    type: DATA_LOADING_REQUEST
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccessHeaders = (shipmentHeader: ShipmentHeaders): ShipmentActions => ({
    type: DATA_LOADING_SUCCESS_SHIPMENT_HEADERS,
    payload: shipmentHeader
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccessTable = (shipmentList: ShipmentList): ShipmentActions => ({
    type: DATA_LOADING_SUCCESS_SHIPMENT_TABLE,
    payload: shipmentList
});

/**
 * ********** Экшен для обработки ошибки при запросе на сервер **********
 */
export const fetchingDataFailure = (error: ResponseStatus): ShipmentActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

/**
 * ********** Экшен для запроса данных из компонентов **********
 */
export const fetchDataShipment = (data: ShipmentListReq) => async (dispatch: Dispatch<ShipmentActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}sortBetweenPartnerShipments`, data)
            .then((response: AxiosResponse<ShipmentListRes>) => {
                const filterData = response.data.payload.recordDisplayRules.filter((element: ShipmentHeader) => {
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
        return error;
    }
};
