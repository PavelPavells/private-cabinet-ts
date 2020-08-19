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
    code: number;
    result_message: string;
    action: string;
}

export interface PriceListHeader {
    displayName: string;
    fieldName: string;
    size: number;
    visible: 0 | 1;
}

export type PriceListHeaders = Array<PriceListHeader>;

export interface PriceListItem {
    currencyDesc: string;
    currencyId: number;
    deleted: 0 | 1;
    deletedStr: string;
    discountCash: number;
    discountPrice: number;
    discountSum: number;
    discountTypeName: string;
    discountValidAfter: string | null;
    discountValidUntil: string | null;
    itemArticle: string | null;
    itemGroup: string;
    itemPriceUuid: string;
    itemShortName: string;
    itemUuid: string;
    itemWorkName: string;
    itypeName: string;
    parentItypeName: string;
    partnerUuid: string;
    price: number;
    priceType: string;
    validUntil: string | null;
}

export type PriceList = Array<PriceListItem>;

export interface PriceListReq {
    page: number;
    limit: number;
    sortBy: null | string;
    sortDirection: number;
    groupBy: null | string;
    findBy: null | string;
    findValue: null | string;
    uuid: string;
}

export interface PriceListRes {
    payload: {
        displayRules: PriceListHeaders;
        recordSet: {
            content: PriceList;
        };
        pageable: {
            sort: {
                sorted: boolean;
                unsorted: boolean;
                empty: boolean;
            };
            pageNumber: number;
            pageSize: number;
            offset: number;
            unpaged: boolean;
            paged: boolean;
        };
        totalPages: number;
        last: boolean;
        totalElements: number;
        numberOfElements: number;
        first: boolean;
        number: number;
        size: number;
        sort: {
            sorted: boolean;
            unsorted: boolean;
            empty: boolean;
        };
        empty: boolean;
    };
    response: ResponseStatus;
}

// export interface filterByColumns {
//     findBy: string | null;
//     uuid: string;
// }

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
