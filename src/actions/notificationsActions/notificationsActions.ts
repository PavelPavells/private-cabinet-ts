import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import {
    DATA_LOADING_REQUEST_NOTIFICATIONS,
    DATA_LOADING_SUCCESS_NOTIFACTIONS,
    DATA_LOADING_FAILURE_NOTIFICATIONS,
    NotificationsActions,
    NotificationsRes,
    NotificationNumber,
    ResponseStatus
} from '../../constants/notificationsTypes/notificationsTypes';
import site from '../../constants/GlobalSettings/Global';

export const fetchingDataRequest = (): NotificationsActions => ({
    type: DATA_LOADING_REQUEST_NOTIFICATIONS
});

export const fetchingDataSuccess = (notificationsNumber: NotificationNumber): NotificationsActions => ({
    type: DATA_LOADING_SUCCESS_NOTIFACTIONS,
    payload: notificationsNumber
});

export const fetchingDataFailure = (error: ResponseStatus): NotificationsActions => ({
    type: DATA_LOADING_FAILURE_NOTIFICATIONS,
    payload: error
});

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
