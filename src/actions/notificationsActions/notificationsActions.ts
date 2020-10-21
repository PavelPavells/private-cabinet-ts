/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';

/**
 * ********** Импорт глобальных переменных **********
 */
import {
    DATA_LOADING_REQUEST_NOTIFICATIONS,
    DATA_LOADING_SUCCESS_NOTIFACTIONS,
    DATA_LOADING_FAILURE_NOTIFICATIONS,
    NotificationsActions,
    NotificationsRes,
    NotificationNumber,
    ResponseStatus
} from '../../constants/notificationsTypes/notificationsTypes';

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../../constants/GlobalSettings/Global';

/**
 * ********** Экшен для инициализации запроса **********
 */
export const fetchingDataRequest = (): NotificationsActions => ({
    type: DATA_LOADING_REQUEST_NOTIFICATIONS
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccess = (notificationsNumber: NotificationNumber): NotificationsActions => ({
    type: DATA_LOADING_SUCCESS_NOTIFACTIONS,
    payload: notificationsNumber
});

/**
 * ********** Экшен для обработки ошибки при запросе на сервер **********
 */
export const fetchingDataFailure = (error: ResponseStatus): NotificationsActions => ({
    type: DATA_LOADING_FAILURE_NOTIFICATIONS,
    payload: error
});

/**
 * ********** Экшен для запроса данных из компонентов **********
 */
export const fetchDataNotifications = () => async (dispatch: Dispatch<NotificationsActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios.get(`${site}notifications`).then((response: AxiosResponse<NotificationsRes>) => {
            dispatch(fetchingDataSuccess(response.data.payload));
        });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};
