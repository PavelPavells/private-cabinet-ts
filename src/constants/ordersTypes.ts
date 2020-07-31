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
    action: string;
    result: 0 | 1;
    result_message: string;
}

export interface OrdersHeader {
    display_name: string;
    field_name: string;
    size: number;
    visible: 0 | 1;
}

export type OrdersHeaders = Array<OrdersHeader>;

export interface OrdersItem {
    clorder_uuid: string;
    clorder_guid: string;
    clorder_id: string;
    create_date: number;
    status: string;
    partner_uuid: string;
    contragent_uuid: string;
    contragent_name: string;
    organization_uuid: string;
    organization_name: string;
    contract_name: string;
    currency_id: number;
    currency_name: string;
    clorder_sum: number;
    vat_include: number;
    manager_uuid: string;
    manager_name: string;
    approval_status: number;
    approval_date: number;
    advance_sum: number;
    prepayment_sum: number;
    cargo_account: string;
    consignee_account: string;
    contact_person: string;
    comments: string;
    deleted: 0 | 1;
    user_created: string;
    creation_date: number;
}

export type OrdersList = Array<OrdersItem>;

export interface OrdersListReq {
    offset: number;
    size: number;
    login: string;
}

export interface OrdersListRes {
    payload: {
        countUUID: number;
        page: number;
        recordDisplayRules: OrdersHeaders;
        recordSet: OrdersList;
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
