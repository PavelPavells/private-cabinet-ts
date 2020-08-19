/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';
export const DATA_LOADING_SUCCESS_SHIPMENT_HEADERS = 'DATA_LOADING_SUCCESS_SHIPMENT_HEADERS';
export const DATA_LOADING_SUCCESS_SHIPMENT_TABLE = 'DATA_LOADING_SUCCESS_SHIPMENT_TABLE';
export const SHIPMENT_SET_INPUTS = 'SHIPMENT_SET_INPUTS';
export const SHIPMENT_SET_INPUT = 'SHIPMENT_SET_INPUT';

/**
 * ********** Глобальные переменные для асинхронных запросов на сервер, интерфейсы ответов **********
 */
export interface ResponseStatus {
    action: string;
    result: 0 | 1;
    resultMessage: string;
}

export interface ShipmentHeader {
    displayName: string;
    fieldName: string;
    size: number;
    visible: 0 | 1;
}

export type ShipmentHeaders = Array<ShipmentHeader>;

export interface ShipmentItem {
    cashDate: string;
    cashFlowUuid: string;
    cashSum: number;
    shipmentUuid: string;
    cashSumAcum: number;
    cdxTransactionId: number;
    currencyStr: string;
    partnerName: string;
    partnerUuid: string;
    currencyDesc: string;
    currencyId: number;
    deleted: 0 | 1;
    deletedStr: string;
    discountCash: number;
    discountPrice: number;
    discountSum: number;
    discountTypeName: string;
    discountValidBefore: string | null;
    discountValidUntil: string | null;
    itemArticle: string | null;
    itemGroup: string;
    itemPriceUuid: string;
    itemShortName: string;
    itemUuid: string;
    itemWorkName: string;
    itypeName: string;
    parentItypeName: string;
    price: number;
    priceType: string;
    validUntil: string | null;
}

export type ShipmentList = Array<ShipmentItem>;

export interface ShipmentListReq {
    page: number;
    limit: number;
    sortBy: null | string;
    sortDirection: number;
    groupBy: null | string;
    findBy: null | string;
    findValue: null | string;
    uuid: string;
}

export interface ShipmentListRes {
    payload: {
        countUUID: number;
        page: number;
        displayRules: ShipmentHeaders;
        recordSet: {
            content: ShipmentList;
        };
    };
    response: ResponseStatus;
}

/**
 * *********** Интерфейсы стейта Компонента Shipment **********
 */
export interface ShipmentState {
    isFetching: boolean;
    errorMessage: string;
    headersShipment: ShipmentHeaders | null;
    tableShipment: ShipmentList | null;
    inputs: ShipmentInputs;
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

export interface ShipmentInputs {
    [key: string]: string;
}

interface ShipmentSetInputs {
    type: typeof SHIPMENT_SET_INPUTS;
    payload: ShipmentInputs;
}

interface ShipmentSetInput {
    type: typeof SHIPMENT_SET_INPUT;
    payload: { key: string; value: string };
}

export type ShipmentActions =
    | ShipmentSetInput
    | ShipmentSetInputs
    | ShipmentRequest
    | ShipmentSuccessHeaders
    | ShipmentSuccessTable
    | ShipmentFailure;
