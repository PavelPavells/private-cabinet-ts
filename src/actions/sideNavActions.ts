/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios from 'axios';
import { Dispatch } from 'react';

/**
 * ********** Импорт глобальных переменных **********
 */
import { SideNavActions, SideNavState, DATA_LOADING_REQUEST, DATA_LOADING_SUCCESS, DATA_LOADING_FAILURE } from '../constants/sideNavTypes';

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../constants/Global';

/**
 * ********** Экшен для инициализации запроса **********
 */
export const fetchingDataRequest = (): SideNavActions => ({
    type: DATA_LOADING_REQUEST
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccess = (data: any): SideNavActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data.data
});

/**
 * ********** Экшен для обработки ошибки при запросе на сервер **********
 */
export const fetchingDataFailure = (error: any): SideNavActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

/**
 * ********** Экшен для запроса данных из компонентов **********
 */
export const fetchDataSideNav = (data: SideNavState) => async (dispatch: Dispatch<SideNavActions>) => {
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
