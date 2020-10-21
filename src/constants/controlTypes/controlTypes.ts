/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

/**
 * *********** Интерфейсы стейта Компонента Control **********
 */
export interface ControlState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface ControlRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface ControlSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: ControlState[];
}

interface ControlFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type ControlActions = ControlRequest | ControlSuccess | ControlFailure;
