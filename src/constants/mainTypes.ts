/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

/**
 * *********** Интерфейсы стейта Компонента Main **********
 */

export interface ResponseStatus {
    code: number;
    result_message: string;
    action: string;
}

export interface MainItem {
    partnerUuid: string;
    companyName: string;
    vatStr: string;
    guaranteeStr: string;
    registrationDate: string;
    currentDiscount: number;
    currentCash: number;
    minDiscount: number;
    maxDiscount: number;
}
export type MainList = MainItem;

export interface MainListReq {
    uuid: string;
}

export interface MainListRes {
    payload: {
        recordSet: MainList;
    };
}

export interface MainState {
    isFetching: boolean;
    errorMessage: string;
    main: MainList | null;
}

interface MainRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface MainSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: MainList;
}

interface MainFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type MainActions = MainRequest | MainSuccess | MainFailure;
