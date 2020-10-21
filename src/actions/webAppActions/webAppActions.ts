/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios from 'axios';
import { Dispatch } from 'react';

/**
 * ********** Импорт глобальных переменных **********
 */
import { WebAppActions, WebAppState, DATA_LOADING_REQUEST, DATA_LOADING_SUCCESS, DATA_LOADING_FAILURE } from '../../constants/webAppTypes/webAppTypes';

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../../constants/GlobalSettings/Global';

/**
 * ********** Экшен для инициализации запроса **********
 */
export const fetchingDataRequest = (): WebAppActions => ({
    type: DATA_LOADING_REQUEST
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccess = (data: any): WebAppActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data.data
});

/**
 * ********** Экшен для обработки ошибки при запросе на сервер **********
 */
export const fetchingDataFailure = (error: any): WebAppActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

/**
 * ********** Экшен для запроса данных из компонентов **********
 */
export const fetchDataWebApp = (data: WebAppState) => async (dispatch: Dispatch<WebAppActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}`, data)
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

/** ********** ACTIONS FOR TOGGLE POPUP WINDOW ********** */
// export const togglePopupWindowTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE })

/** ********** ACTIONS FOR TOGGLE POPUP WINDOW MAIN INFO ********** */
// export const togglePopupWindowMainInfoTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE_MAIN_INFO })
