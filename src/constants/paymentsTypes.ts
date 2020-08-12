/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';
export const DATA_LOADING_SUCCESS_PAYMENTS_HEADERS = 'DATA_LOADING_SUCCESS_PAYMENTS_HEADERS';
export const DATA_LOADING_SUCCESS_PAYMENTS_TABLE = 'DATA_LOADING_SUCCESS_PAYMENTS_TABLE';

/**
 * ********** Глобальные переменные для асинхронных запросов на сервер, интерфейсы ответов **********
 */
export interface ResponseStatus {
    code: string;
    result_message: string;
    action: string;
}

export interface PaymentHeader {
    fieldName: string;
    displayName: string;
    size: number;
    visible: 0 | 1;
}

export type PaymentHeaders = Array<PaymentHeader>;

export interface PaymentItem {
    cashFlowUuid: string;
    partnerUuid: string;
    partnerName: string;
    cashDate: string;
    cashSum: number;
    cashSumAcum: number;
    currencyStr: string;
    cdxTransactionId: number;
}

export type PaymentList = Array<PaymentItem>;

export interface PaymentListReq {
    page: number;
    limit: number;
    sortBy: null | string;
    sortDirection: number;
    groupBy: null | string;
    findBy: null | string;
    findValue: null | string;
    uuid: string;
}

export interface PaymentListRes {
    payload: {
        displayRules: PaymentHeaders;
        recordSet: {
            content: PaymentList;
        };
    };
    pageable: {
        sort: {
            sorted: boolean;
            unsorted: false;
            empty: boolean;
        };
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        unpaged: boolean;
    };
    totalElements: number;
    totalPages: number;
    last: boolean;
    number: number;
    size: number;
    sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
    };
    numberOfElements: number;
    first: boolean;
    empty: boolean;
    response: ResponseStatus;
}

/**
 * *********** Интерфейсы стейта Компонента Payment **********
 */
export interface PaymentState {
    isFetching: boolean;
    errorMessage: string;
    headersPayment: PaymentHeaders | null;
    tablePayment: PaymentList | null;
}

interface PaymentRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface PaymentSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: PaymentState[];
}

interface PaymentSuccessHeaders {
    type: typeof DATA_LOADING_SUCCESS_PAYMENTS_HEADERS;
    payload: PaymentHeaders;
}

interface PaymentSuccessTable {
    type: typeof DATA_LOADING_SUCCESS_PAYMENTS_TABLE;
    payload: PaymentList;
}

interface PaymentFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type PaymentActions = PaymentRequest | PaymentSuccess | PaymentSuccessHeaders | PaymentSuccessTable | PaymentFailure;
