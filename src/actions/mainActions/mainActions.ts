import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import {
    MainActions,
    MainList,
    MainListReq,
    NewsList,
    OffersList,
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS,
    DATA_LOADING_NEWS,
    DATA_LOADING_OFFERS,
    ResponseStatus,
    MainListRes,
    TableList
} from '../../constants/mainTypes/mainTypes';
import site from '../../constants/GlobalSettings/Global';

export const fetchingDataRequest = (): MainActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccess = (main: MainList): MainActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: main
});

export const fetchDataDiscountSettings = (discountSettings: TableList): MainActions => ({
    type: DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS,
    payload: discountSettings
});

export const fetchingDataFailure = (error: ResponseStatus): MainActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const fetchDataNews = (news: NewsList): MainActions => ({
    type: DATA_LOADING_NEWS,
    payload: news
});

export const fetchDataOffers = (offers: OffersList): MainActions => ({
    type: DATA_LOADING_OFFERS,
    payload: offers
});

export const fetchDataMain = (data: MainListReq) => async (dispatch: Dispatch<MainActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios.post(`${site}main`, data).then((response: AxiosResponse<MainListRes>) => {
            dispatch(fetchingDataSuccess(response.data.payload.recordSet));
            dispatch(fetchDataDiscountSettings(response.data.payload.discountSettings));
            dispatch(fetchDataNews(response.data.payload.news));
            dispatch(fetchDataOffers(response.data.payload.offers));
        });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};
