/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';
export const DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS = 'DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS';

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
    leadManagerName: string;
    accountFullName: string;
    leadManagerPhone: string;
    leadManagerEmail: string;
}
export type MainList = MainItem;

export interface TableItem {
    rowNum: number;
    volume: number;
    discountSum: number;
    conditions: number;
}
export type TableList = TableItem[];

export interface MainListReq {
    uuid: string;
}

export interface MainListRes {
    payload: {
        recordSet: MainList;
        discountSettings: TableList;
    };
}

export interface MainState {
    isFetching: boolean;
    errorMessage: string;
    main: MainList | null;
    table: TableList | null;
}

interface MainRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface MainSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: MainList;
}

interface MainSuccessDiscount {
    type: typeof DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS;
    payload: TableList;
}

interface MainFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type MainActions = MainRequest | MainSuccess | MainSuccessDiscount | MainFailure;
