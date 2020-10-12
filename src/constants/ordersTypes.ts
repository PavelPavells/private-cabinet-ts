/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';
export const DATA_LOADING_SUCCESS_ORDERS_HEADERS = 'DATA_LOADING_SUCCESS_ORDERS_HEADERS';
export const DATA_LOADING_SUCCESS_ORDERS_TABLE = 'DATA_LOADING_SUCCESS_ORDERS_TABLE';

/**
 * ********** Глобальные переменные для асинхронных запросов на сервер, интерфейсы ответов **********
 */

export interface ResponseStatus {
    code: number;
    message: string;
}

export interface OrdersHeader {
    displayName: string;
    fieldName: string;
    size: number;
    visible: 0 | 1;
}

export type OrdersHeaders = Array<OrdersHeader>;

export interface OrdersItem {
    clientOrderUuid: string;
    clientOrderGuid: string;
    clientOrderId: string;
    createDate: string;
    status: string;
    partnerUuid: string;
    partnerGuid: string;
    contragentGuid: string;
    contragentName: string;
    organizationUuid: string;
    organizationName: string;
    contractName: string;
    currencyId: number;
    currencyName: string;
    clientOrderSum: number;
    vatInclude: number;
    managerUuid: string;
    managerName: string;
    approvalStatus: number;
    approvalDate: string;
    advanceSum: number;
    prepaymentSum: number;
    cargoAccount: string;
    consigneeAccount: string;
    contactPerson: string;
    comments: string;
    deleted: 0 | 1;
    userCreated: string;
    creationDate: number;
}

export type OrdersList = Array<OrdersItem>;

export interface OrdersListReq {
    page: number;
    limit: number;
    sortBy: null | string;
    sortDirection: number | undefined;
    groupBy: null | string;
    findBy: null | string;
    findValue: null | string;
    uuid: string;
}

export interface OrdersListRes {
    payload: {
        displayRules: OrdersHeaders;
        recordSet: {
            content: OrdersList;
        };
        pageable: {
            sort: {
                sorted: boolean;
                unsorted: boolean;
                empty: boolean;
            };
            offset: number;
            pageNumber: number;
            pageSize: number;
            paged: boolean;
            unpaged: boolean;
        };
        totalElements: number;
        totalPages: boolean;
        last: boolean;
        number: number;
        size: boolean;
        sort: {
            sorted: boolean;
            unsorted: boolean;
            empty: boolean;
        };
        numberOfElements: number;
        first: boolean;
        empty: boolean;
    };
    response: ResponseStatus;
}

/**
 * *********** Интерфейсы стейта Компонента Orders **********
 */
export interface OrdersState {
    isFetching: boolean;
    errorMessage: string;
    ordersHeaders: OrdersHeaders | null;
    ordersTable: OrdersList | null;
}

interface OrdersRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface OrdersSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: OrdersState[];
}

interface OrdersSuccessHeaders {
    type: typeof DATA_LOADING_SUCCESS_ORDERS_HEADERS;
    payload: OrdersHeaders;
}

interface OrdersSuccessTable {
    type: typeof DATA_LOADING_SUCCESS_ORDERS_TABLE;
    payload: OrdersList;
}

interface OrdersFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type OrdersActions = OrdersSuccessHeaders | OrdersSuccessTable | OrdersRequest | OrdersSuccess | OrdersFailure;
