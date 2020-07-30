/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

/**
 * *********** Интерфейсы стейта Компонента Main **********
 */
export interface MainState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface MainRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface MainSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: MainState[];
}

interface MainFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type MainActions = MainRequest | MainSuccess | MainFailure;
