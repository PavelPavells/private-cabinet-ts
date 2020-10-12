/**
 * типы компонента Notifications
 */
export const DATA_LOADING_REQUEST_NOTIFICATIONS = 'DATA_LOADING_REQUEST_NOTIFICATIONS';
export const DATA_LOADING_SUCCESS_NOTIFACTIONS = 'DATA_LOADING_SUCCESS_NOTIFICATIONS';
export const DATA_LOADING_FAILURE_NOTIFICATIONS = 'DATA_LOADING_FAILURE_NOTIFICATIONS';

/**
 * ********** Глобальные переменные для асинхронных запросов на сервер, интерфейсы ответов **********
 */

export interface ResponseStatus {
    code: string;
    message: string;
    action: string;
}

export interface NotificationNumber {
    notifications: number;
}

export interface NotificationsRes {
    result: ResponseStatus;
    payload: NotificationNumber;
}

export interface NotificationsState {
    isFetching: boolean;
    errorMessage: string;
    notifications: NotificationNumber | null;
}

interface NotificationsRequest {
    type: typeof DATA_LOADING_REQUEST_NOTIFICATIONS;
}

interface NotificationsSuccess {
    type: typeof DATA_LOADING_SUCCESS_NOTIFACTIONS;
    payload: NotificationNumber;
}

interface NotificationsFailure {
    type: typeof DATA_LOADING_FAILURE_NOTIFICATIONS;
    payload: any;
}

export type NotificationsActions = NotificationsRequest | NotificationsSuccess | NotificationsFailure;
