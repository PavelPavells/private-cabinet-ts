/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

/**
 * *********** Интерфейсы стейта Компонента SideNav **********
 */
export interface SideNavState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface SideNavRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface SideNavSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: SideNavState[];
}

interface SideNavFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type SideNavActions = SideNavRequest | SideNavSuccess | SideNavFailure;
