/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

/**
 * *********** Интерфейсы стейта Компонента TopNav **********
 */
export interface TopNavState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface TopNavRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface TopNavSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: TopNavState[];
}

interface TopNavFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type TopNavActions = TopNavRequest | TopNavSuccess | TopNavFailure;
