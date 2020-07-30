/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';
export const DATA_LOADING_SUCCESS_SHIPMENT_HEADERS = 'DATA_LOADING_SUCCESS_SHIPMENT_HEADERS';
export const DATA_LOADING_SUCCESS_SHIPMENT_TABLE = 'DATA_LOADING_SUCCESS_SHIPMENT_TABLE';

/**
 * ********** Глобальные переменные для асинхронных запросов на сервер, интерфейсы ответов **********
 */
export interface ResponseStatus {
    action: string;
    result: 0 | 1;
    result_message: string;
}

export interface ShipmentHeader {
    display_name: string;
    field_name: string;
    size: number;
    visible: 0 | 1;
}

export type ShipmentHeaders = Array<ShipmentHeader>;

export interface ShipmentItem {
    cash_date: string;
    cash_flow_uuid: string;
    cash_sum: number;
    cash_sum_acum: number;
    cdx_transaction_id: number;
    currency_str: string;
    partner_name: string;
    partner_uuid: string;
    currency_desc: string;
    currency_id: number;
    deleted: 0 | 1;
    deleted_str: string;
    discount_cash: number;
    discount_price: number;
    discount_sum: number;
    discount_type_name: string;
    discount_valid_before: string | null;
    discount_valid_until: string | null;
    item_article: string | null;
    item_group: string;
    item_price_uuid: string;
    item_short_name: string;
    item_uuid: string;
    item_work_name: string;
    itype_name: string;
    parent_itype_name: string;
    price: number;
    price_type: string;
    valid_until: string | null;
}

export type ShipmentList = Array<ShipmentItem>;

export interface ShipmentListReq {
    offset: number;
    size: number;
    login: string;
}

export interface ShipmentListRes {
    payload: {
        countUUID: number;
        page: number;
        recordDisplayRules: ShipmentHeaders;
        recordSet: ShipmentList;
    };
    response: ResponseStatus;
}

/**
 * *********** Интерфейсы стейта Компонента Shipment **********
 */
export interface ShipmentState {
    isFetching: boolean;
    errorMessage: string;
    headersShipment: any;
    tableShipment: any;
}

interface ShipmentRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface ShipmentSuccessHeaders {
    type: typeof DATA_LOADING_SUCCESS_SHIPMENT_HEADERS;
    payload: ShipmentHeaders;
}

interface ShipmentSuccessTable {
    type: typeof DATA_LOADING_SUCCESS_SHIPMENT_TABLE;
    payload: ShipmentList;
}

interface ShipmentFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type ShipmentActions = ShipmentRequest | ShipmentSuccessHeaders | ShipmentSuccessTable | ShipmentFailure;
