import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
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
} from '../../constants/priceListTypes/pricelListTypes';
import site from '../../constants/GlobalSettings/Global';

export const fetchingDataRequest = (): PriceListActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccessHeaders = (priceListHeader: PriceListHeaders): PriceListActions => ({
    type: DATA_LOADING_SUCCESS_PRICE_LIST_HEADERS,
    payload: priceListHeader
});

export const fetchingDataSuccessTable = (priceList: PriceList): PriceListActions => ({
    type: DATA_LOADING_SUCCESS_PRICE_LIST_TABLE,
    payload: priceList
});

export const fetchingDataFailure = (error: ResponseStatus): PriceListActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const priceListSetInputs = (inputs: PriceListInputs): PriceListActions => ({
    type: PRICE_LIST_SET_INPUTS,
    payload: inputs
});

export const priceListSetInput = (payload: { key: string; value: string }): PriceListActions => ({
    type: PRICE_LIST_SET_INPUT,
    payload
});

export const fetchDataPriceList = (data: PriceListReq) => async (dispatch: Dispatch<PriceListActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}price`, data)
            .then((response: AxiosResponse<PriceListRes>) => {
                const filterData = response.data.payload.displayRules.filter((element: PriceListHeader) => {
                    if (element.visible) {
                        return element;
                    }
                });
                const tempInputs: PriceListInputs = {};
                response.data.payload.displayRules.forEach((element) => {
                    tempInputs[element.fieldName] = '';
                });
                dispatch(priceListSetInputs(tempInputs));
                dispatch(fetchingDataSuccessHeaders(filterData));
                dispatch(fetchingDataSuccessTable(response.data.payload.recordSet.content));
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};
