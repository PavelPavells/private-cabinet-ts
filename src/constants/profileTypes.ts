/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

/**
 * *********** Интерфейсы стейта Компонента Profile **********
 */
export interface ProfileState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface ProfileRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface ProfileSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: ProfileState[];
}

interface ProfileFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type ProfileActions = ProfileRequest | ProfileSuccess | ProfileFailure;
