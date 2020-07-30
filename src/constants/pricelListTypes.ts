export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';
export const DATA_LOADING_SUCCESS_PRICE_LIST_HEADERS = 'DATA_LOADING_SUCCESS_PRICE_LIST_HEADERS';
export const DATA_LOADING_SUCCESS_PRICE_LIST_TABLE = 'DATA_LOADING_SUCCESS_PRICE_LIST_TABLE';
export const PRICE_LIST_SET_INPUTS = 'PRICE_LIST_SET_INPUTS';
export const PRICE_LIST_SET_INPUT = 'PRICE_LIST_SET_INPUT';

/**
 * ********** Глобальные переменные для асинхронных запросов на сервер, интерфейсы ответов **********
 */
export interface ResponseStatus {
    action: string;
    result: 0 | 1;
    result_message: string;
}

export interface PriceListHeader {
    display_name: string;
    field_name: string;
    size: number;
    visible: 0 | 1;
}

export type PriceListHeaders = Array<PriceListHeader>;

export interface PriceListItem {
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
    partner_uuid: string;
    price: number;
    price_type: string;
    valid_until: string | null;
}

export type PriceList = Array<PriceListItem>;

export interface PriceListReq {
    offset: number;
    size: number;
    login: string;
}

export interface PriceListRes {
    payload: {
        countUUID: number;
        page: number;
        recordDisplayRules: PriceListHeaders;
        recordSet: PriceList;
    };
    response: ResponseStatus;
}

/**
 * *********** Интерфейсы стейта Компонента PriceList **********
 */
export interface PriceListState {
    isFetching: boolean;
    errorMessage: string;
    headersPriceList: PriceListHeaders | null;
    tablePriceList: PriceList | null;
    inputs: PriceListInputs;
}

interface PriceListRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface PriceListSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: PriceListState[];
}

interface PriceListSuccessHeaders {
    type: typeof DATA_LOADING_SUCCESS_PRICE_LIST_HEADERS;
    payload: PriceListHeaders;
}

interface PriceListSuccessTable {
    type: typeof DATA_LOADING_SUCCESS_PRICE_LIST_TABLE;
    payload: PriceList;
}

interface PriceListFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export interface PriceListInputs {
    [key: string]: string;
}

interface PriceListSetInputs {
    type: typeof PRICE_LIST_SET_INPUTS;
    payload: PriceListInputs;
}

interface PriceListSetInput {
    type: typeof PRICE_LIST_SET_INPUT;
    payload: { key: string; value: string };
}

export type PriceListActions =
    | PriceListSetInput
    | PriceListSetInputs
    | PriceListSuccessHeaders
    | PriceListSuccessTable
    | PriceListRequest
    | PriceListSuccess
    | PriceListFailure;
