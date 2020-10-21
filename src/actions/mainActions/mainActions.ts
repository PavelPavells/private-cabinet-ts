/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';

/**
 * ********** Импорт глобальных переменных **********
 */
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

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../../constants/GlobalSettings/Global';

/**
 * ********** Экшен для инициализации запроса **********
 */
export const fetchingDataRequest = (): MainActions => ({
    type: DATA_LOADING_REQUEST
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccess = (main: MainList): MainActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: main
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchDataDiscountSettings = (discountSettings: TableList): MainActions => ({
    type: DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS,
    payload: discountSettings
});

/**
 * ********** Экшен для обработки ошибки при запросе на сервер **********
 */
export const fetchingDataFailure = (error: ResponseStatus): MainActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

/**
 * ********** Экшен для обработки новостей **********
 */
export const fetchDataNews = (news: NewsList): MainActions => ({
    type: DATA_LOADING_NEWS,
    payload: news
});

/**
 * ********** Экшен для обработки предложений **********
 */
export const fetchDataOffers = (offers: OffersList): MainActions => ({
    type: DATA_LOADING_OFFERS,
    payload: offers
});

/**
 * ********** Экшен для запроса данных из компонентов **********
 */
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
