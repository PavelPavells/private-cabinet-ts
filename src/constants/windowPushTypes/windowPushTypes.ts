/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

/**
 * *********** Интерфейсы стейта Компонента Profile **********
 */
export interface ResponseStatus {
    code: number;
    message: string;
    action: any;
}

export interface WindowPushState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface WindowPushRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface WindowPushSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: WindowPushState;
}

interface WindowPushFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type ProfileActions = WindowPushRequest | WindowPushSuccess | WindowPushFailure;
