import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
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
} from '../../constants/ordersTypes/ordersTypes';
import site from '../../constants/GlobalSettings/Global';
import { ResponseStatus } from '../../constants/paymentTypes/paymentsTypes';

export const fetchingDataRequest = (): OrdersActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccessHeaders = (ordersHeader: OrdersHeaders): OrdersActions => ({
    type: DATA_LOADING_SUCCESS_ORDERS_HEADERS,
    payload: ordersHeader
});

export const fetchingDataSuccessTable = (orders: OrdersList): OrdersActions => ({
    type: DATA_LOADING_SUCCESS_ORDERS_TABLE,
    payload: orders
});

export const fetchingDataFailure = (error: ResponseStatus): OrdersActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const fetchDataOrders = (data: OrdersListReq) => (dispatch: Dispatch<OrdersActions>) => {
    dispatch(fetchingDataRequest());
    return axios
        .post(`${site}order`, data)
        .then((response: AxiosResponse<OrdersListRes>) => {
            const filterData = response.data.payload.displayRules.filter((element: OrdersHeader) => {
                if (element.visible) {
                    return element;
                }
            });
            dispatch(fetchingDataSuccessHeaders(filterData));
            dispatch(fetchingDataSuccessTable(response.data.payload.recordSet.content));
        })
        .catch((error: any) => {
            dispatch(fetchingDataFailure(error));
        });
};
