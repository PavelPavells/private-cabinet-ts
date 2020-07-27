/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios from 'axios';
import { Dispatch } from 'react';

/**
 * ********** Импорт глобальных переменных **********
 */
import { PriceListActions, PriceListState, DATA_LOADING_REQUEST, DATA_LOADING_SUCCESS, DATA_LOADING_FAILURE } from '../constants/types';

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../constants/Global';

/**
 * ********** Экшен для инициализации запроса **********
 */
export const fetchingDataRequest = (): PriceListActions => ({
    type: DATA_LOADING_REQUEST
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccess = (data: any): PriceListActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data.data
});

/**
 * ********** Экшен для обработки ошибки при запросе на сервер **********
 */
export const fetchingDataFailure = (error: any): PriceListActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

/**
 * ********** Экшен для запроса данных из компонентов **********
 */
export const fetchDataPriceList = (data: PriceListState) => async (dispatch: Dispatch<PriceListActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}findPrice`, data)
            .then((data) => {
                dispatch(fetchingDataSuccess(data));
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};

/**
 * ********** Экшен для запроса данных для последней страницы **********
 */
export const fetchDataLastPagePriceList = (data: PriceListState) => async (dispatch: Dispatch<PriceListActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}getLastPage`, data)
            .then((data) => {
                dispatch(fetchingDataSuccess(data));
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};

// export const fetchDataPriceListPagination = data => {
//     return async dispatch => {
//         dispatch(fetchingDataRequest());
//         try {
//             await axios.post(`${site}`)
//         } catch (error) {

//         }
//     }
// }

/** ********** ACTIONS FOR TOGGLE POPUP WINDOW ********** */
// export const togglePopupWindowTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE })

/** ********** ACTIONS FOR TOGGLE POPUP WINDOW MAIN INFO ********** */
// export const togglePopupWindowMainInfoTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE_MAIN_INFO })
