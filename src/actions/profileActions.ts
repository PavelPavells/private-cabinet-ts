/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios from 'axios';
import { Dispatch } from 'react';

/**
 * ********** Импорт глобальных переменных **********
 */
import { ProfileActions, DATA_LOADING_REQUEST, DATA_LOADING_SUCCESS, DATA_LOADING_FAILURE } from '../constants/profileTypes';

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../constants/Global';

/**
 * ********** Экшен для инициализации запроса **********
 */
export const fetchingDataRequest = (): ProfileActions => ({
    type: DATA_LOADING_REQUEST
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccess = (data: any): ProfileActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data.data
});

/**
 * ********** Экшен для обработки ошибки при запросе на сервер **********
 */
export const fetchingDataFailure = (error: any): ProfileActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

/**
 * ********** Экшен для запроса данных из компонентов **********
 */
export const fetchDataAccount = (data: ProfileActions) => async (dispatch: Dispatch<ProfileActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}`, data)
            // eslint-disable-next-line no-shadow
            .then((data) => {
                dispatch(fetchingDataSuccess(data));
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};

/** ********** ACTIONS FOR TOGGLE POPUP WINDOW ********** */
// export const togglePopupWindowTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE })

/** ********** ACTIONS FOR TOGGLE POPUP WINDOW MAIN INFO ********** */
// export const togglePopupWindowMainInfoTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE_MAIN_INFO })
