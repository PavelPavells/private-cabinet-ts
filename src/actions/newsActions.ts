/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios from 'axios';
import { Dispatch } from 'react';

/**
 * ********** Импорт глобальных переменных **********
 */
import {
    NewsActions,
    NewsState,
    DATA_LOADING_REQUEST, 
    DATA_LOADING_SUCCESS, 
    DATA_LOADING_FAILURE,
} from '../constants/types';

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../constants/Global';

const API_KEY = "2aced1b133264999b4dff057ca32a684";
export const ROOT_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;


/**
 * ********** Экшен для инициализации запроса **********
 */
export const fetchingDataRequest = (): NewsActions => ({
    type: DATA_LOADING_REQUEST
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccess = (data: any): NewsActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data
})

/**
 * ********** Экшен для обработки ошибки при запросе на сервер **********
 */
export const fetchingDataFailure = (error: any): NewsActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
})

/**
 * ********** Экшен для запроса данных из компонентов **********
 */
export const fetchDataNews = (data: NewsState) => async (dispatch: Dispatch<NewsActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios.post(`${site}`, data)
        .then(data => {
            dispatch(fetchingDataSuccess(data));
        })
        .catch(error => { console.log(error) })
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
}

/** ********** ACTIONS FOR TOGGLE POPUP WINDOW ********** */
//export const togglePopupWindowTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE })

/** ********** ACTIONS FOR TOGGLE POPUP WINDOW MAIN INFO ********** */
//export const togglePopupWindowMainInfoTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE_MAIN_INFO })