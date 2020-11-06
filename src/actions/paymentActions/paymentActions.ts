import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import {
    PaymentActions,
    PaymentHeader,
    PaymentList,
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS_PAYMENTS_HEADERS,
    DATA_LOADING_SUCCESS_PAYMENTS_TABLE,
    DATA_LOADING_FAILURE,
    ResponseStatus,
    PaymentListRes,
    PaymentListReq,
    PaymentHeaders
} from '../../constants/paymentTypes/paymentsTypes';

import site from '../../constants/GlobalSettings/Global';

export const fetchingDataRequest = (): PaymentActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccessHeaders = (paymentListHeader: PaymentHeaders): PaymentActions => ({
    type: DATA_LOADING_SUCCESS_PAYMENTS_HEADERS,
    payload: paymentListHeader
});

export const fetchingDataSuccessTable = (paymentListTable: PaymentList): PaymentActions => ({
    type: DATA_LOADING_SUCCESS_PAYMENTS_TABLE,
    payload: paymentListTable
});

export const fetchingDataFailure = (error: ResponseStatus): PaymentActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const fetchDataPayment = (data: PaymentListReq) => async (dispatch: Dispatch<PaymentActions>): Promise<void> => {
    dispatch(fetchingDataRequest());
    try {
        await axios.post(`${site}cashflow`, data).then((response: AxiosResponse<PaymentListRes>) => {
            const filterData = response.data.payload.displayRules.filter((element: PaymentHeader) => {
                if (element.visible) {
                    return element;
                }
            });
            dispatch(fetchingDataSuccessHeaders(filterData));
            dispatch(fetchingDataSuccessTable(response.data.payload.recordSet.content));
        });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};

// export const fetchDataLastPagePayment = (data: PaymentState) => async (dispatch: Dispatch<PaymentActions>) => {
//     dispatch(fetchingDataRequest());
//     try {
//         await axios.post(`${site}findLastCashFlows`, data).then((response) => {
//             dispatch(fetchingDataSuccess(response));
//         });
//     } catch (error) {
//         dispatch(fetchingDataFailure(error));
//     }
// };
