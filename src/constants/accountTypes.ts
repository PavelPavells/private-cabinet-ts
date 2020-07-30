/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

/**
 * *********** Интерфейсы стейта Компонента Account **********
 */
export interface AccountState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface AccountRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface AccountSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: AccountState[];
}

interface AccountFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type AccountActions = AccountRequest | AccountSuccess | AccountFailure;
