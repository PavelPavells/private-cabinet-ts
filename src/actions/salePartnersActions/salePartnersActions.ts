import axios from 'axios';
import { Dispatch } from 'react';
import {
    SalePartnersActions,
    SalePartnersState,
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE
} from '../../constants/salePartnersTypes/salePartnersTypes';
import site from '../../constants/GlobalSettings/Global';

export const fetchingDataRequest = (): SalePartnersActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccess = (data: any): SalePartnersActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data.data
});

export const fetchingDataFailure = (error: any): SalePartnersActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const fetchDataSalePartners = (data: SalePartnersState) => async (dispatch: Dispatch<SalePartnersActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}sortBetweenPartnerDiscountsHistory`, data)
            .then((response) => {
                dispatch(fetchingDataSuccess(response));
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};

export const fetchDataLastPageSalePartners = (data: SalePartnersState) => async (dispatch: Dispatch<SalePartnersActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}findLastPartnerDiscountsHistory`, data)
            .then((response) => {
                dispatch(fetchingDataSuccess(response));
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};

// export const togglePopupWindowTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE })

// export const togglePopupWindowMainInfoTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE_MAIN_INFO })
